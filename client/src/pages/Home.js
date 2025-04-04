import React from 'react';
import './Home.css';
// import BannerImage from '../assets/banner/default-banner.jpg';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@mui/material'; // Importez le composant Button de Material UI
import MobileHeader from '../components/header/MobileHeader';
import DesktopHeader from '../components/header/DesktopHeader';

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const handleDiscoverClick = () => {
    console.log('Découvrir les articles');
    // Ici, vous pouvez ajouter la logique pour rediriger l'utilisateur vers la liste des articles
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 min-h-screen">
      {isMobile && <MobileHeader />}
      {isDesktop && <DesktopHeader />}

      <main className="container mx-auto py-8 px-4">
        {/* Section Hero */}
        <section className="mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            {/* <img src={BannerImage} alt="Bannière HnaKids" className="w-full h-64 object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl font-bold mb-4">Trouvez des trésors pour vos petits choux !</h1>
              <p className="text-lg mb-6">Un vide-grenier en ligne pour les mamans et leurs bébés.</p>
              <Button
                variant="contained" // Utilisez le style de bouton "contained" de Material UI
                color="primary" // Couleur principale (bleu par défaut)
                onClick={handleDiscoverClick}
              >
                Découvrir les articles
              </Button>
            </div>
          </div>
        </section>

        {/* Navigation par catégories */}
        <div className="mb-8">
          <div className="container mx-auto px-4 flex space-x-4 overflow-x-auto">
            <Button variant="outlined" size="small">Jouets</Button>
            <Button variant="outlined" size="small">Vêtements bébé</Button>
            <Button variant="outlined" size="small">Matériel bébé</Button>
            <Button variant="outlined" size="small">Grossesse & allaitement</Button>
            {/* Ajoutez d'autres catégories ici en utilisant le composant Button de Material UI */}
          </div>
        </div>

        {/* Articles vedettes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Articles vedettes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Placeholders pour les articles */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article 1</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article 2</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article 3</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article 4</div>
            {/* Ajoutez plus de placeholders si nécessaire */}
          </div>
          <div className="text-center mt-4">
            <Button variant="contained" color="indigo" onClick={() => console.log('Voir tous les articles')}>
              Voir tous les articles
            </Button>
          </div>
        </section>

        {/* Section Maman */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Notre sélection pour les mamans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Placeholders pour les articles de la section maman */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article Maman 1</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article Maman 2</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article Maman 3</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">Article Maman 4</div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} HnaKids. Tous droits réservés.</p>
        {/* Ajoutez d'autres liens de footer ici */}
      </footer>
    </div>
  );
}

export default Home;