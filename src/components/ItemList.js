import React from "react";
import { ProductoShowcase } from "./ItemShow.js";


const ItemList = ({listaProductos}) => {

    return(
    
        <div>
    
            {listaProductos.map((item) => 
            
                <ProductoShowcase
            
                    img={item.img}
            
                    nombre={item.nombre}
            
                    precio={item.precio}
            
                    stock={item.stock}
            
                    id={item.id}
                
                />
                
                )}
    
        </div>
    
    );

}



export default ItemList;