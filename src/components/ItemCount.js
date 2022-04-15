import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Counter = ( { stock, cantidad, setCantidad, onAdd } ) => {

    

    const click = (tipo, {stock} ) =>{

        if (tipo === 'sumar') {
    
            if (cantidad < stock){

                setCantidad(cantidad + 1);
            
            }
    
    
        } else {
    
            if (cantidad > 0)
    
            setCantidad(cantidad - 1);
        
        };

    };

    return (

        <Container>

            
            <h1>Cantidad</h1>
            
            <div className="d-flex justify-content-center" >

                <Button variant="outline-danger" onClick={() => click('restar') }>

                    -

                </Button>
            
                <h2> {cantidad} </h2>

                <Button variant="outline-primary" onClick={() => click('sumar', {stock}) }>

                    +

                </Button>

            </div>

            <Button onClick={onAdd}> Agregar al carrito </Button>

            <h5> En stock: {stock} </h5>
            
        
        </Container>
            

                

        
    
    );
};

export default Counter;