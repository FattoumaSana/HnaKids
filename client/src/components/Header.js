import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo/logo-HnaKids-3D.png'; // Assurez-vous que le chemin vers votre logo est correct
import { Link } from 'react-router-dom'; // Si vous utilisez React Router

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/"> {/* Utilisez Link si vous avez configuré React Router */}
                    <img
                        alt="Logo HnaKids"
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    HnaKids
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Accueil</Nav.Link> {/* Utilisez Link pour la navigation interne */}
                        <Nav.Link as={Link} to="/boutique">Boutique</Nav.Link>
                        <Nav.Link as={Link} to="/vendre">Vendre</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
                        <Nav.Link as={Link} to="/panier">Panier</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;