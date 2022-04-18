import React from 'react';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';


const Menu = () => {

    return (
    
        <header className='d-flex header'>

            <Link to="/"> <h1>Kutun Ceramica</h1> </Link>

            <nav className='header-nav'>

                <Link to="/" className='header-link' > Inicio </Link>

                <Link to="/category/vajillas" className='header-link'> Vajillas </Link>

                <Link to="/category/mandalas" className='header-link'> Mandalas </Link>

                <Link to="/category/unicos" className='header-link'> Unicos </Link>

                <CartWidget/>

            </nav>

        </header>

    );
};

export default Menu;


