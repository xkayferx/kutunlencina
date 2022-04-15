import React from "react";
import { Container } from "react-bootstrap";
import { ProductoShowcase } from "./ItemShow.js";




const ItemList = ({listaProductos}) => {

    return(
    
        
        <Container>
    
            {listaProductos.map((item) => 
            
                <ProductoShowcase
            
                    img={item.img}
            
                    nombre={item.nombre}
            
                    precio={item.precio}
            
                    stock={item.stock}

                    id={item.id}
            
                    key={item.id}
                
                />
                
            )}
    
        </Container>
    
    );

}



export default ItemList;