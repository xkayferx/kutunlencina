import React, { useContext } from 'react';
import Counter from './ItemCount.js';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ItemDetail = ({productsData}) => {

    const {img, nombre, precio, stock, id} = productsData;

    const { cart } = useContext(CartContext);

    return (

        <Card style={{ width: '18rem' }} key={id}>
        
            <Card.Img variant="top" src={img} />
        
            <Card.Body>
        
                <Card.Title>{nombre}</Card.Title>
        
                <Card.Text>
        
                    {precio}

                </Card.Text>
                
                <Card.Text>

                    Coming Soon!!

                </Card.Text>

                <Card.Text>
        
                    <Counter 
                    
                    stock={stock}
                    
                    />
        
                </Card.Text>
        
                <Link to="/item/:id" > <Button variant="primary">Detalles</Button> </Link>
                
        
            </Card.Body>
        
        </Card>

    )

}


export default ItemDetail;