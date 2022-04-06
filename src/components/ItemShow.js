import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const ProductoShowcase = ({ img, nombre, precio, stock, id }) => {

    return (

        <Card style={{ width: '18rem' }} key={id}>
        
            <Card.Img variant="top" src={img} />
        
            <Card.Body>
        
                <Card.Title>{nombre}</Card.Title>

                <Card.Text>
        
                    {precio}

                </Card.Text>

                <Card.Text>
        
                    En stock :{stock}
        
                </Card.Text>
        
                <Link to="/item/:id" > <Button variant="primary">Detalles</Button> </Link>
                
        
            </Card.Body>
        
        </Card>

    );

};