import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const ProductoShowcase = ({ img, nombre, precio, stock, id }) => {

    return (

        <div className='col' >

            <Card style={{ width: '18rem' }} key={id} className="centerText" >
            
                <Card.Img variant="top" src={img} />
            
                <Card.Body>
            
                    <Card.Title className='marked' >{nombre}</Card.Title>

                    <Card.Text className='price' >
            
                        Precio : ${precio}

                    </Card.Text>

                    <Card.Text>
            
                        En stock :{stock}
            
                    </Card.Text>
            
                    <Link to= {`/item/${id}`} className="underLine" > Detalles </Link>
                    
            
                </Card.Body>
            
            </Card>

        </div>
    );

};