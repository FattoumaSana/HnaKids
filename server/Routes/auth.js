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

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        res.status(201).send({ msg: "User created successfully!", user: { _id: newUser._id, username: newUser.username, email: newUser.email }, token });
    } catch (err) {
        console.error(err, "server error during registration");
        res.status(500).send({ msg: "Server error during registration" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ msg: "Incorrect password" });
        }

        const payload = {
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        res.status(200).send({ msg: "Logged in successfully!", user: { _id: user._id, username: user.username, email: user.email }, token });
    } catch (err) {
        console.error(err, "server error during login");
        res.status(500).send({ msg: "Server error during login" });
    }
});

router.get("/isAuth", isAuth, async (req, res) => {
    res.status(200).send({ user: { _id: req.user._id, username: req.user.username, email: req.user.email } });
});

// Nouvelle route pour récupérer les informations de l'utilisateur connecté
router.get("/user", isAuth, async (req, res) => {
    try {
        // L'utilisateur est déjà authentifié grâce au middleware isAuth
        // Les informations de l'utilisateur sont disponibles dans req.user
        res.status(200).json({
            _id: req.user._id,
            username: req.user.username,
            email: req.user.email,
            phone: req.user.phone,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            deliveryAddress: req.user.deliveryAddress,
            createdAt: req.user.createdAt
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des informations utilisateur." });
    }
});

module.exports = router;