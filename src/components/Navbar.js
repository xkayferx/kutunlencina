import React from 'react';
import CartWidget from './CartWidget.js';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Menu = () => {

    return (
    
        <Navbar expand="lg" bg="dark" variant="dark">

            <div className='container-fluid'>

                <Link to="/" className="underLine marked white"> <h1>Kutun Ceramica</h1> </Link>

                <Nav className="me-auto">

                    <NavLink to="/" className="underLine marked white links" > Inicio </NavLink>

                    <NavLink to="/categoria/vajillas" className="underLine marked white links" > Vajillas </NavLink>

                    <NavLink to="/categoria/mandalas" className="underLine marked white links"> Mandalas </NavLink>

                    <NavLink to="/categoria/unicos" className="underLine marked white links" > Unicos </NavLink>

                    <CartWidget/>

                </Nav>

            </div>

        </Navbar>

    );
};

export default Menu;


