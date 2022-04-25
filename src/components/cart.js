
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext";

const Cart = () => {

    const {cart, cartTotal, clearCart, removeItem,} = useContext(CartContext)

    return (

        <div>

            <h1>Tu Compra</h1>

            <div>

                {

                    cart.map((item) => (

                        <div className="d-flex" key={item.id}>

                            <h4>{item.nombre}</h4>

                            <p> cantidad : {item.cantidad} </p>

                            <p> precio: ${item.precio * item.cantidad} </p>

                            <button onClick={() => removeItem(item.id) } > X </button>

                        </div>

                    ))

                }

                <hr/>

                <h3>TOTAL : ${cartTotal()}</h3>

                <button onClick={clearCart}> Vaciar el carrito </button>

                <Link to="/checkout" className="btn btn-success"> Terminar Compra </Link>

            </div>

        </div>

    )

}

export default Cart