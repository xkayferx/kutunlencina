import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import { ProductoShowcase } from "./ItemShow.js";




const ItemList = ({listaProductos}) => {

    return(
    
        
        <Container>

            <div className="row row-cols-1 row-cols-md-3 g-4">
    
                {listaProductos.map((item) => 
            
                    <ProductoShowcase
            
                        img={item.img}
                        
                        nombre={item.nombre}
                        
                        precio={item.precio}
                        
                        stock={item.stock}
                        
                        id={item.id}
                        
                        key={item.id}
                        
                        desc={item.desc}

                        categoria={item.categoria}
                    />
            
                )}
    
            </div>
            
        </Container>
    
    );

}



export default ItemList;