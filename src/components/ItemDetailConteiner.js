import React, { useState, useEffect } from 'react';
import { promesa } from './mocks/FakeApi.js';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';


export const ItemDetailConteiner = () => {

    const [ itemDetail , setItemDetail] = useState({});

    const { itemId } = useParams()

    console.log(itemId)

    console.log(itemDetail)
    
    useEffect(() => {
    
        promesa
            
            .then((res) => setItemDetail(res.find((item) => item.id === Number(itemId))))
    
            .catch((error) => console.log(error))
    
    },[])


    return( 
    
    <div>

        <ItemDetail productsData={ itemDetail } />

    </div> 
    
    ); 

}