import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo/logo-HnaKids-3D.png'; 
import { Link } from 'react-router-dom'; 

function MobileHeader() {
    return (
        <Navbar bg="primary" variant="dark" expand="md" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="Logo HnaKids"
                        src={logo}
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    HnaKids
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Accueil</Nav.Link>
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
}

export default MobileHeader;