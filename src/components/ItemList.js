import React, { useState } from "react";
import { ProductoShowcase } from "./ItemShow.js";
import { productsData } from  "./helpers/data.js";

export const ItemList = () => {
    
    const [ tiempo , setTiempo] = useState(0);
    
    function promiseOne (){
            
            
            const promesa = new Promise ((resolve, reject) => {
                

                setTimeout(function () {
        
                    setTiempo(tiempo + 1);
        
                }, 2000);
        
                if (tiempo > 0) {

                    resolve ('Funciona')
        
                } else {
        
                    reject ('hay un error');
        
                }
        
            });

            promesa.then(

                (result) => {

                    console.log(result)

                    productsData.map((item) => (

                            <ProductoShowcase 
                            
                                img={item.img}
                
                                nombre={item.nombre}
                
                                precio={item.precio}
                
                                stock={item.stock}
                
                                id={item.id}
                
                            />
                        ))

                },

                (fail) => {

                    console.error(fail);

                }

            )
        }

    return promiseOne();
}