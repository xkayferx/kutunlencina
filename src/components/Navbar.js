import React from 'react';
import Cart from './CartWidget.js';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Menu = () => {

    return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Kutun</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Noticias</Nav.Link>
                <Nav.Link href="#pricing">Productos</Nav.Link>
                <Cart />
                <Nav.Link href="#help">Ayuda</Nav.Link>
                <Nav.Link href="#sesion">Log In</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );
};

export default Menu;


