
import React, { useContext } from "react";

import { CartContext } from "./CartContext";

const Cart = () => {

    const {cart, cartTotal, clearCart, removeItem,} = useContext(CartContext)

    return (

        <div>

            <h1>Tu Compra</h1>

            <div>

                {

                    cart.map((item) => (

                        <div key={item.id}>

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

            </div>

        </div>

    )

}

export default Cart