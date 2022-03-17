import React from 'react';
import CartLogo from './media/carrito.png'
import { Navbar } from 'react-bootstrap'

const Cart = () => {

    return (
        
        <Navbar.Brand href="#home">
            <img
                alt=""
                src={CartLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            Carrito
        </Navbar.Brand>
    
        );
};

export default Cart;