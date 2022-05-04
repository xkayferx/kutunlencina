
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext";

const Cart = () => {

    const {cart, cartTotal, clearCart, removeItem,} = useContext(CartContext)

    return (

        <div>

            <h1>Tu Compra</h1>

            <div>

                <ul className="list-group list-group-flush">

                {

                    cart.map((item) => (

                        <div className="list-group-item d-flex justify-content-center" key={item.id}>

                            <h4 className="listItem">{item.nombre}</h4>

                            <p className="listItem"> cantidad : {item.cantidad} </p>

                            <p className="listItem"> precio: ${item.precio * item.cantidad} </p>

                            <button onClick={() => removeItem(item.id) } className="btn btn-danger" > X </button>

                        </div>

                    ))
                    
                }

                </ul>

                <hr/>

                <h3 className="d-flex justify-content-center">TOTAL : ${cartTotal()}</h3>

                <div className="d-flex justify-content-center">

                    <button onClick={clearCart} className="btn btn-outline-danger" > Vaciar el carrito </button>

                    <Link to="/checkout" className="btn btn-outline-success"> Terminar Compra </Link>
                </div>

            </div>

        </div>

    )

}

export default Cart