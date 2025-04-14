const jwt = require("jsonwebtoken");
const User = require("../Models/User"); // Assurez-vous que le chemin est correct (User avec majuscule)

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["autorisation"];
        if (!token) {
            return res.status(401).send({ msg: "no token" }); // Renvoyez un statut 401 pour non autorisé
        } else {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET); // Utilisez la variable d'environnement pour la clé secrète
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).send({ msg: "no user connected" }); // Renvoyez un statut 401
            } else {
                req.user = user;
                next();
            }
        }
    } catch (err) {
        return res.status(401).json({ msg: "token invalide" }); // Renvoyez un statut 401
    }
};

module.exports = isAuth;