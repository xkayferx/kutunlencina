import React from 'react';
import Counter from './ItemCount.js';
import { Card } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


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
        
                <Link to="/item/:id" > <Button variant="primary">Detalles</Button> </Link>
                
        
            </Card.Body>
        
        </Card>

    );

};