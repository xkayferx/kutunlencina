import React from 'react';
import Counter from './ItemCount.js';
import { Card } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const ItemDetail = ({productsData}) => {

    const {img, nombre, precio, stock, id} = productsData;

    return (

        <Card style={{ width: '18rem' }} key={id}>
        
            <Card.Img variant="top" src={img} />
        
            <Card.Body>
        
                <Card.Title>Card Title</Card.Title>
        
                <Card.Text>
        
                    <h3>{nombre}</h3>

                    <Card.Text>

                        <p>Coming Soon!!</p>

                    </Card.Text>

                    <h2>{precio}</h2>
        
                </Card.Text>

                <Card.Text>
        
                    <Counter 
                    
                    stock={stock}
                    
                    />
        
                </Card.Text>
        
                <LinkContainer to="/item/:id" > <Button variant="primary">Detalles</Button> </LinkContainer>
                
        
            </Card.Body>
        
        </Card>

    )

}

export default ItemDetail;