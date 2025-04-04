import React from 'react';
import logo from '../../assets/logo/logo-HnaKids-3D.png';
import { FormControl, Button, Nav, Navbar, Container, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function DesktopHeader() {
  const searchPlaceholders = ["Rechercher des jouets...", "Rechercher des vêtements...", "Rechercher du matériel bébé..."];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]); // État pour les suggestions
  const [showSuggestions, setShowSuggestions] = useState(false); // État pour afficher/cacher les suggestions

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % searchPlaceholders.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [searchPlaceholders.length]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    // Simuler des suggestions en fonction de la saisie (à remplacer par une API réelle)
    if (value.length > 2) {
      const simulatedResults = [
        `Résultat pour "${value}" dans Jouets`,
        `Résultat pour "${value}" dans Vêtements bébé`,
        `Autre suggestion pour "${value}"`,
      ];
      setSuggestions(simulatedResults);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Recherche soumise :', searchText);
    setShowSuggestions(false); // Cacher les suggestions lors de la soumission
    // Ici, vous gérerez la logique de recherche réelle
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
    console.log('Suggestion cliquée :', suggestion);
    // Ici, vous pouvez déclencher la recherche ou naviguer vers la page appropriée
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="col-md-3 d-flex align-items-center">
          <img
            alt="Logo HnaKids"
            src={logo}
            height="30"
            className="d-inline-block align-top me-2"
          />
          <span className="fs-5">HnaKids</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex mx-auto col-md-6 position-relative" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder={searchPlaceholders[placeholderIndex]}
              className="me-2 rounded-pill w-100"
              aria-label="Search"
              value={searchText}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" className="rounded-pill">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
            {showSuggestions && suggestions.length > 0 && (
              <ListGroup className="position-absolute top-100 w-100 mt-1 shadow">
                {suggestions.map((suggestion, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
          <Nav
            className="ms-auto my-2 my-lg-0 col-md-3 justify-content-end align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/login" className="me-3">
              <FontAwesomeIcon icon={faUser} className="me-1" />
              Connexion
            </Nav.Link>
            <Nav.Link as={Link} to="/panier">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DesktopHeader;