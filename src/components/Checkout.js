import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { collection, addDoc, Timestamp, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

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

            comprador: {...values},

            fyh: Timestamp.fromDate(new Date())

        }

        const ordersRef = collection(db, 'orders')

        cart.forEach((item) => {

            const docRef = doc(db, 'producto', item.id )

            getDoc(docRef)

                .then((doc) => {

                    if (doc.data().stock >= item.contidad) {

                        updateDoc(docRef, {
    
                            stock: doc.data().stock - item.cantidad
                            
                        })

                    }else{

                        alert('no hay stock este item')

                    }


                })
            
        });

        addDoc(ordersRef, orden)

            .then((doc) => {

                setOrderId(doc.id)
                
                clearCart()

            })

    }

    if (orderId) {

        return (

            <div className="container">

                <h2> Tu orden ah sido registrada Existosamente</h2>

                <hr/>

                <h4> Guarda tu numero de orden : {orderId}</h4>

                <Link to="/" > Volver</Link>

            </div>

        )

    }

    if (cart.length === 0) {

        return <Navigate to ="/" />

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