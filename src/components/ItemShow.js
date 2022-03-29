import React from 'react';
import Counter from './components/ItemCount.js';
import { Card } from 'react-bootstrap';


export const ProductoShowcase = ({ img, nombre, precio, stock, id }) => {

    return (

        <Card style={{ width: '18rem' }} key={id}>
        
            <Card.Img variant="top" src={img} />
        
            <Card.Body>
        
                <Card.Title>Card Title</Card.Title>
        
                <Card.Text>
        
                    <h3>{nombre}</h3>

                    <h2>{precio}</h2>
        
                </Card.Text>

                <Card.Text>
        
                    <Counter 
                    
                    stock={stock}
                    
                    />
        
                </Card.Text>
        
                <Button variant="primary">Go somewhere</Button>
        
            </Card.Body>
        
        </Card>

    );

};