import React, { useContext } from 'react';
import CartLogo from './media/carrito.png'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        
        <Link to={"/cart"} className="underLine marked white links">
        
            <Navbar.Brand>

                <img

                alt=""
                
                src={CartLogo}
                
                width="30"
                
                height="30"
                
                className="d-inline-block"
            
            />

                <span>{cartQuantity()}</span>
        
            </Navbar.Brand>

        </Link>

        
    

    );
};

export default CartWidget;