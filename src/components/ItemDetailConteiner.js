import React, { useState, useEffect } from 'react';
import { promesa } from './components/mocks/FakeApi.js';


export const ItemDetailConteiner = () => {

    const [ itemDetail , setItemDetail] = useState({});
    
    useEffect(() => {
    
        promesa
            
            .then((res) => setItemDetail(res.find((item) => item.id === "01")))
    
            .catch((error) => console.log(error))
    
    },[])


    return( 
    
    <div>

        <itemDetail itemDetail = {itemDetail} />

    </div> 
    
    ); 

}