import React from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './components/ItemListTitle.js';
import Counter from './components/ItemCount.js';

const greeting = {

    title: 'Bienvenido'

};

const product = {

    stock: 15

};

const noproduct = {

    nostock: 0

};

const ItemList = () => {

    return (
    
        <Container>
            
            <div>

                <ListTitle title={ greeting.title } />

            </div>

            <div>

                <Counter 
                
                    stock={noproduct.nostock}
                
                />

            </div>

            <div>

                <Counter 
                
                    stock={product.stock}
                
                />

            </div>
        
        </Container>

    );
};

export default ItemList;


