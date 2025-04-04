import React from 'react';
import logo from '../../assets/logo/logo-HnaKids-3D.png';
import { Button } from '../ui/moving-border';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';



function DesktopHeader() {

    const searchPlaceholders = ["Rechercher des jouets...", "Rechercher des vêtements...", "Rechercher du matériel bébé..."];
    const handleSearchChange = (e) => {

        console.log('Recherche en cours :', e.target.value);

        // Vous pouvez gérer la logique de changement ici

    };



    const handleSearchSubmit = (e) => {

        console.log('Recherche soumise :', e.target.value);

        // Vous pouvez gérer la logique de soumission ici

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

                    <PlaceholdersAndVanishInput

                        placeholders={searchPlaceholders}

                        onChange={handleSearchChange}

                        onSubmit={handleSearchSubmit}

                    />

                </div>


                {/* Bouton de connexion à droite */}

                <div className="flex-shrink-0">

                    <Button>Connexion</Button>

                </div>

            </div>


            {/* Navigation par catégories */}

            <div className="bg-gray-100 dark:bg-gray-700 py-2 mt-2">

                <div className="container mx-auto px-6 flex space-x-4 overflow-x-auto">

                    <button className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow">Jouets</button>

                    <button className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow">Vêtements bébé</button>

                    <button className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow">Matériel bébé</button>

                    <button className="px-4 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow">Grossesse & allaitement</button>

                </div>

            </div>

        </header>

    );

}


export default DesktopHeader; 