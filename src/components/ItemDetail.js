import React, { useContext, useState } from 'react';
import Counter from './ItemCount.js';
import { Card } from 'react-bootstrap';
import { CartContext } from './CartContext.js';
import { Link, useNavigate } from 'react-router-dom';


const ItemDetail = ({productsData}) => {

    const {img, nombre, precio, stock, id ,desc} = productsData;

    const { addItem, isInCart } = useContext(CartContext)

    const[ cantidad , setCantidad] = useState(1);
    
    const agregarAlCarito = () => {

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

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate(-1)

    }

    return (

        <Card style={{ width: '18rem' }} key={id} className="centerText" >
        
            <Card.Img variant="top" src={img} />
        
            <Card.Body>
        
                <Card.Title className='marked' >{nombre}</Card.Title>
        
                <Card.Text>
        
                    {precio}

                </Card.Text>
                
                <Card.Text>

                    {desc}

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
        
                    <button onClick={handleNavigate} className="btn btn-secondary" >Volver</button>
        
                </Card.Text>

                
        
            </Card.Body>
        
        </Card>

    )

}


export default ItemDetail;