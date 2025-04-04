import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../components/header/MobileHeader';
import DesktopHeader from '../components/header/DesktopHeader';
import HeroSection from '../components/HeroSection';
import { Container, Row, Col, Button as BootstrapButton } from 'react-bootstrap';
import CategoryButton from '../components/CategoryButton';
import CategoryButtonsSection from '../components/CategoryButtonsSection';

import heroImage from '../assets/images/hnakids-bg2.jpg';

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const handleCategoryClick = (category) => {
    console.log(`Catégorie sélectionnée : ${category}`);
    // Ici, vous pouvez ajouter la logique pour filtrer les articles par catégorie
  };

  return (
    <div className="min-vh-100">
      {isMobile && <MobileHeader />}
      {isDesktop && <DesktopHeader />}

      <HeroSection backgroundImage={heroImage} />
      <CategoryButtonsSection onCategoryClick={handleCategoryClick} />

      <main className="container py-4">
        {/* Articles vedettes */}
        <section className="mb-4">
          <h2 className="h4 fw-semibold mb-3">Articles vedettes</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article 1</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article 2</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article 3</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article 4</div>
            </div>
          </div>
          <div className="text-center mt-3">
            <BootstrapButton variant="primary">Voir tous les articles</BootstrapButton>
          </div>
        </section>

        {/* Section Maman */}
        <section className="mb-4">
          <h2 className="h4 fw-semibold mb-3">Notre sélection pour les mamans</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article Maman 1</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article Maman 2</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article Maman 3</div>
            </div>
            <div className="col">
              <div className="bg-light border rounded-3 shadow-sm p-3">Article Maman 4</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-light py-3 text-center text-muted">
        <Container>
          <p>&copy; {new Date().getFullYear()} HnaKids. Tous droits réservés.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;