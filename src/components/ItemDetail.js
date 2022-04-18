import React, { useContext, useState } from 'react';
import Counter from './ItemCount.js';
import { Card } from 'react-bootstrap';
import { CartContext } from './CartContext.js';
import { Link } from 'react-router-dom';


const ItemDetail = ({productsData}) => {

    const {img, nombre, precio, stock, id} = productsData;

    const { addItem, isInCart } = useContext(CartContext)

    const[ cantidad , setCantidad] = useState(1);
    
    const agregarAlCarito = (cantidad) => {

        const itemToAdd = {

            id,

            img,
            
            nombre,
            
            precio,

            cantidad

        }

        addItem(itemToAdd)

        console.log(itemToAdd)

    }

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

                    {

                        !isInCart(id)

                            ?<Counter 
                    
                                stock={stock}

                                cantidad={cantidad}

                                setCantidad={setCantidad}

                                onAdd={agregarAlCarito}
                    
                            />
                        
                            :<Link to="/cart" className='btn btn-success'> Terminar mi compra </Link>

                    }
        
                    
        
                </Card.Text>

                
        
            </Card.Body>
        
        </Card>

    )

}


export default ItemDetail;