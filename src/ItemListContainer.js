import React from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './components/ItemListTitle.js';

const greeting = {

    title: 'Bienvenido'

};

const ItemList = () => {

    return (
    
        <Container>
            
            <div>

                <ListTitle title={ greeting.title } />

            </div>
        
        </Container>

    );
};

export default ItemList;


