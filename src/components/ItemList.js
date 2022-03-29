import React from "react";
import ProductoShowcase from "./Item.js";
import productsData from  "./productosArtesanales";

export const ItemList = () => {

    return (

        
        productsData.map((item) => (

            <ProductoShowcase 
            
                img={item.img}

                nombre={item.nombre}

                precio={item.precio}

                stock={item.stock}

                id={item.id}

            />
        ))

    );

};