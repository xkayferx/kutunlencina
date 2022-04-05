import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


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
        
                    <p>En stock :{stock}</p>
        
                </Card.Text>
        
                <LinkContainer to="/item/:id" > <Button variant="primary">Detalles</Button> </LinkContainer>
                
        
            </Card.Body>
        
        </Card>

    );

};