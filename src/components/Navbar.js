import React from 'react';
import Cart from './CartWidget.js';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {

    return (
    
    <Navbar bg="dark" variant="dark">
    
        <Container>
    
            <Navbar.Brand href="/">Kutun</Navbar.Brand>
    
            <Nav className="me-auto">
    
                <LinkContainer to="/">Inicio</LinkContainer>
    
                <LinkContainer to="/category/mandalas">Mandalas</LinkContainer>
    
                <LinkContainer to="/category/vajillas">Vajillas</LinkContainer>
    
                <LinkContainer to="/category/unicos">Unicos</LinkContainer>
    
                <Cart />
                
            </Nav>
    
        </Container>
    
    </Navbar>
    );
};

export default Menu;


