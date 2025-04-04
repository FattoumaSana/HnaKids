import React from 'react';
import logo from '../../assets/logo/logo-HnaKids-3D.png';
import { Button } from '@mui/material'; // Importez le composant Button de Material UI
import { TextField } from '@mui/material'; // Importez le composant TextField pour l'input
import { useState, useEffect } from 'react'; // Importez les hooks nécessaires

function DesktopHeader() {
  const searchPlaceholders = ["Rechercher des jouets...", "Rechercher des vêtements...", "Rechercher du matériel bébé..."];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % searchPlaceholders.length);
    }, 1500); // Change de placeholder toutes les 1.5 secondes

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle
  }, [searchPlaceholders.length]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log('Recherche en cours :', e.target.value);
    // Vous pouvez gérer la logique de changement ici (par exemple, filtrer des résultats)
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    console.log('Recherche soumise :', searchText);
    // Vous pouvez gérer la logique de soumission ici (par exemple, effectuer une requête de recherche)
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo HnaKids" className="h-10" />
        </div>

        {/* Barre de recherche centrée */}
        <div className="flex-grow mx-4">
          <form onSubmit={handleSearchSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={searchPlaceholders[placeholderIndex]}
              value={searchText}
              onChange={handleSearchChange}
              size="small"
            />
          </form>
        </div>

        {/* Bouton de connexion à droite */}
        <div className="flex-shrink-0">
          <Button color="primary" variant="outlined" size="small">Connexion</Button>
        </div>
      </div>

      {/* Navigation par catégories */}
      <div className="bg-gray-100 dark:bg-gray-700 py-2 mt-2">
        <div className="container mx-auto px-6 flex space-x-4 overflow-x-auto">
          <Button variant="contained" color="secondary" size="small">Jouets</Button>
          <Button variant="contained" color="secondary" size="small">Vêtements bébé</Button>
          <Button variant="contained" color="secondary" size="small">Matériel bébé</Button>
          <Button variant="contained" color="secondary" size="small">Grossesse & allaitement</Button>
          {/* Ajoutez d'autres catégories ici en utilisant le composant Button de Material UI */}
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;