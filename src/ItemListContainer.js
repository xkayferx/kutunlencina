import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './components/ItemListTitle.js';
import  ItemList  from './components/ItemList.js';
import { promesa } from './components/mocks/FakeApi.js';


const greeting = {

    title: 'Bienvenido'

};


const ItemListContainer = () => {

    const [ listaProductos , setListaProductos] = useState([]);
    
    useEffect(() => {
    
        promesa
            
            .then((res) => setListaProductos(res))
    
            .catch((error) => console.log(error))
    
    },[])


    
    return (
    
        <Container>
            
            <div>

                <ListTitle title={ greeting.title } />

            </div>

            <div>

                <ItemList listaProductos={ listaProductos } />

            </div>
        
        </Container>

    );
};

export default ItemListContainer;