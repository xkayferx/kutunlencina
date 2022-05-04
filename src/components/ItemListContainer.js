import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ListTitle from './ItemListTitle.js';
import  ItemList  from './ItemList.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { useParams } from 'react-router-dom';


const greeting = {

    title: 'Productos'

};

const ItemListContainer = () => {
    
    const [ listaProductos , setListaProductos] = useState([]);
    
    const { categoriaId } = useParams()
    
    useEffect(() => {
    
        const productosRef = collection(db, "productos")

        const q = categoriaId ? query(productosRef, where('categoria', '==', categoriaId)) : productosRef

        getDocs(q)

            .then(resp => {

                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))

                setListaProductos(items)

            })

    },[categoriaId])


    
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