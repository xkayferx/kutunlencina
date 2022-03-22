import React, { useState } from 'react';
import { Container } from 'react-bootstrap';



const Counter = ( { stock } ) => {

    const[ contador , setContador] = useState(0);

    const click = (tipo, {stock} ) =>{

        if (tipo === 'sumar') {
    
            if (contador < stock){

                setContador(contador + 1);
            
            }
    
    
        } else {
    
            if (contador > 0)
    
            setContador(contador - 1);
        
        };

    };

    return (

        <Container>

            
            <h1>Contador</h1>
            
            <div className="d-flex justify-content-center" >

                <button onClick={() => click('restar') }>

                    -

                </button>
            
                <h2> {contador} </h2>

                <button onClick={() => click('sumar', {stock}) }>

                    +

                </button>


            </div>

            <h5> En stock: {stock} </h5>
            
        
        </Container>
            

                

        
    
    );
};

export default Counter;