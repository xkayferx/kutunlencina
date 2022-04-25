import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Checkout = () => {

    const { cart, cartTotal } = useContext(CartContext)

    const [values, setValues] = useState({

        nombre: '',

        email: '',

        tel: ''

    })

    

    const handleInputChange = (e) => {

        setValues({

            ...values,

            [e.target.name]:e.target.value

        })

    }
    
    
    const handleSubmit = (e) =>{

        e.preventDefault()

        const orden = {

            items: cart,

            total: cartTotal(),

            comprador: {...values}

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

                    value={values.nombre}

                    name='nombre'

                    onChange={ handleInputChange }
                
                />

            <input
                
                className="form-control"

                type={'text'}

                placeholder = 'Tu E-mail'

                value={values.email}

                name='email'

                onChange={ handleInputChange }
            
            />

            <input
                
                className="form-control"

                type={'text'}

                placeholder = 'Tu Telefono'

                value={values.tel}

                name='tel'

                onChange={ handleInputChange }
            
            />

            <button type="submit"> Enviar </button>

            </form>

        </div>

    )

}

export default Checkout