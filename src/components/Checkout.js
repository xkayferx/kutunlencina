import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Checkout = () => {

    const { cart, cartTotal } = useContext(CartContext)

    const [nombre, setNombre] = useState('')

    const [email, setEmail] = useState('')

    const [tel, setTel] = useState('')

    const handleNombre = (e) => {

        setNombre(e.target.value)

    }

    const handleEmail = (e) => {

        setEmail(e.target.value)

    }

    const handleTel = (e) => {

        setTel(e.target.value)

    }
    
    const handleSubmit = (e) =>{

        e.preventDefault()

        const orden = {

            items: cart,

            total: cartTotal(),

            comprador: {

                nombre: nombre,

                email: email,

                tel: tel

            }

        }

    }



    return (

        <div>

            <h2>Checkout</h2>

            <hr/>

            <form onSubmit={ handleSubmit } >

                <input
                
                    className="form-control"

                    type={'text'}

                    placeholder = 'Tu Nombre'

                    value={nombre}

                    onChange={ handleNombre }
                
                />

            <input
                
                className="form-control"

                type={'text'}

                placeholder = 'Tu E-mail'

                value={email}

                onChange={ handleEmail }
            
            />

            <input
                
                className="form-control"

                type={'text'}

                placeholder = 'Tu Telefono'

                value={tel}

                onChange={ handleTel }
            
            />

            <button type="submit"> Enviar </button>

            </form>

        </div>

    )

}

export default Checkout