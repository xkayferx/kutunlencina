import React from 'react';
import Cart from './CartWidget.js';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
    
        <Navbar bg="dark" variant="dark">
    
            <Container>
    
                <Navbar.Brand href="/">Kutun</Navbar.Brand>
    
                <Nav className="me-auto">
                
                    <Link to="/" >Inicio</Link>

                    <Link to="/category/:id" >Categoria1</Link>

                    <Link to="/category/:id" >Categoria2</Link>

                    <Link to="/category/:id" >Categoria3</Link>

                </Nav>
        
            </Container>
    
        </Navbar>
    
    );

};

export default Menu;


