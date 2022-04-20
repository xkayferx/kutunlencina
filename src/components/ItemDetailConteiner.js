import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';


export const ItemDetailConteiner = () => {

    const [ itemDetail , setItemDetail] = useState({});

    const { itemId } = useParams()

    console.log(itemId)

    console.log(itemDetail)
    
    useEffect(() => {
    
        const itemRef = doc(db, "productos", itemId)

        getDoc(itemRef)

            .then(doc => {

                setItemDetail({id: doc.id, ...doc.data()})

            })
    
    },[itemId])


    return( 
    
    <div>

        <ItemDetail productsData={ itemDetail } />

    </div> 
    
    ); 

}