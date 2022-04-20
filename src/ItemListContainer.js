import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './components/ItemListTitle.js';
import  ItemList  from './components/ItemList.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase/config.js';
import { useParams } from 'react-router-dom';


const greeting = {

    title: 'Bienvenido'

};

const ItemListContainer = () => {
    
    const [ listaProductos , setListaProductos] = useState([]);
    
    const { categoryId } = useParams()
    
    useEffect(() => {
    
        const productosRef = collection(db, "productos")

        const q = categoryId ? query(productosRef, where('categoria', '==', categoryId)) : productosRef

        getDocs(q)

            .then(resp => {

                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))

                setListaProductos(items)

            })

    },[categoryId])


    
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