const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Config/database');
const authRoutes = require('./Routes/auth'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données
connectDB();

// Utilisez les routes d'authentification
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de HnaKids !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
// ajouter des produits
const productRoutes = require('./Routes/product');
app.use('/api/products', productRoutes);

// ajouter des commentaires
const commentRoutes = require('./Routes/comment');
app.use('/api/comments', commentRoutes);

//noter un utilisateur
const ratingRoutes = require('./Routes/rating');
app.use('/api/ratings', ratingRoutes);

//ajout favoris
const favoriteRoutes = require('./Routes/favorite');
app.use('/api/favorites', favoriteRoutes);