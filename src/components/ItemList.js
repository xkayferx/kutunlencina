import React from "react";
import Producto from "./Item.js";
import productsData from  "./productosArtesanales";

export const ItemList = () => {

    return (

        
        productsData.map((item) => (

            <Producto 
            
                img={item.img}

                nombre={item.nombre}

                precio={item.precio}

                stock={item.stock}

                id={item.id}

            />
        ))

    );

};