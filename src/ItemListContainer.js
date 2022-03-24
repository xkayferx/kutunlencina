import React from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './components/ItemListTitle.js';
import { ItemList } from './components/ItemList.js';

const greeting = {

    title: 'Bienvenido'

};

const product = {

    stock: 15

};

const noproduct = {

    nostock: 0

};

const ItemListContainer = () => {

    return (
    
        <Container>
            
            <div>

                <ListTitle title={ greeting.title } />

            </div>

            <div>

                <ItemList />

            </div>
        
        </Container>

    );
};

export default ItemListContainer;


