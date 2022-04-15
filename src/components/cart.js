import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "./CartContext";

const Cart = () => {

    const {cart, cartTotal, clearCart, removeItem} = useContext(CartContext)

    return (

        <div>

            <h1>Tu Compra</h1>

            <Container>

            {

                cart.map((item) => (

                    <div key={item.id}>

                        <h4>{item.nombre}</h4>

                        <p> cantidad : {item.cantidad} </p>

                        <p> precio: ${item.precio * item.cantidad} </p>

                        <Button variant="outline-danger" onClick={() => removeItem(item.id) } ></Button>

                    </div>

                ))

            }

            <hr/>

            <h3>TOTAL : ${cartTotal()}</h3>

            <Button onClick={clearCart}> Vaciar el carrito </Button>

            </Container>

        </div>

    )

}

export default Cart