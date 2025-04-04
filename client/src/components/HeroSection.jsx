import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';

function HeroSection({ backgroundImage }) {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white',
        width: '100%',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond noir semi-transparent pour l'effet de flou
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // S'assurer que l'overlay est au-dessus de l'image
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2, // S'assurer que le contenu est au-dessus de l'overlay
        textAlign: 'center',
    };

    return (
        <div style={heroStyle} className="position-relative">
            <div style={overlayStyle}></div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} style={contentStyle}>
                        <Typography variant="h2" component="h1" gutterBottom className="fw-bold">
                            Trouvez des trésors pour vos petits choux et vous-même !
                        </Typography>
                        <Typography variant="h6" paragraph>
                            Un geste pour la planète, un bonheur pour votre porte-monnaie ! Notre application vous permet de vendre et d'acheter des articles d'occasion pour bébés et mamans. Une solution pratique, économique et écologique.
                        </Typography>
                        <div>
                            <Button variant="primary" size="lg" className="me-2 rounded-pill">
                                Explorer les articles
                            </Button>
                            <Button variant="outline-light" size="lg" className="rounded-pill">
                                Vendre mes articles
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;