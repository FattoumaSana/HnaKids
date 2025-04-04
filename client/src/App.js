import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Importez d'autres pages ici si vous en avez (ex: Login, Products, etc.)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil (racine) */}
        {/* Exemple d'une autre route :
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;