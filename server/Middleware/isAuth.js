const jwt = require("jsonwebtoken");
const User = require("../Models/User"); 

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["Authorization"]; 
        if (!token) {
            return res.status(401).send({ msg: "no token" }); // Renvoyez un statut 401 pour non autorisé
        } else {
            const bearerToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token; // Vérifie et extrait le token après "Bearer "

            const decoded = await jwt.verify(bearerToken, process.env.JWT_SECRET); // Utilisez la variable d'environnement pour la clé secrète
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