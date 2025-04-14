const express = require("express");
const router = express.Router();
const User = require("../Models/User"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../Middleware/isAuth"); 


router.post("/register", async (req, res) => {
    try {
        const { username, email, password, phone } = req.body; 
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).send({ msg: "User with this email already exists" }); 
        }
        user = await User.findOne({ username });
        if (user) {
            return res.status(409).send({ msg: "This username is already taken" }); 
        }

        const newUser = new User({
            username,
            email,
            password,
            phone
        });

        const saltRounds = 10;
        const cryptedPassword = await bcrypt.hash(password, saltRounds);
        newUser.password = cryptedPassword;

        await newUser.save();

        const payload = {
            id: newUser._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { // Utilisez la variable d'environnement
            expiresIn: "24h",
        });

        res.status(201).send({ msg: "User created successfully!", user: { _id: newUser._id, username: newUser.username, email: newUser.email }, token }); // Statut 201 Created
    } catch (err) {
        console.error(err, "server error during registration");
        res.status(500).send({ msg: "Server error during registration" }); // Statut 500 Internal Server Error
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User not found" }); // Statut 404 Not Found
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ msg: "Incorrect password" }); // Statut 401 Unauthorized
        }

        const payload = {
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { // Utilisez la variable d'environnement
            expiresIn: "24h",
        });

        res.status(200).send({ msg: "Logged in successfully!", user: { _id: user._id, username: user.username, email: user.email }, token }); // Statut 200 OK
    } catch (err) {
        console.error(err, "server error during login");
        res.status(500).send({ msg: "Server error during login" }); // Statut 500 Internal Server Error
    }
});

router.get("/isAuth", isAuth, async (req, res) => {
    res.status(200).send({ user: { _id: req.user._id, username: req.user.username, email: req.user.email } }); // Renvoyez des informations utilisateur sécurisées
});

module.exports = router;