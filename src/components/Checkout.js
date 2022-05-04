import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { getDocs, query, where, writeBatch, collection, addDoc, Timestamp, updateDoc, getDoc, doc, documentId } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link, Navigate } from "react-router-dom";

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

        const batch = writeBatch(db)

        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(),'in', cart.map((item) => item.id)))

        const productos = getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) =>{

            const itemInCart = cart.find((item) => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {

                batch.update(doc.ref, {

                    stock: doc.data().stock - itemInCart.cantidad

                })

            } else {

                outOfStock.push(itemInCart)

            }

        })

        if (outOfStock.lenght === 0) {

            batch.commit()
            
            addDoc(ordersRef, orden)

            .then((doc) => {

                setOrderId(doc.id)
                
                clearCart()

            })

        } else {

            <h2 className="marked" > hay Items sin Stock </h2>

        }

        

    }

    if (orderId) {

        return (

            <div className="container">

                <h2> Tu orden ah sido registrada Existosamente</h2>

                <hr/>

                <h4> Guarda tu numero de orden : {orderId}</h4>

                <Link to="/" className="btn btn-success" > Volver</Link>

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

            <button type="submit" className="btn btn-primary" > Enviar </button>

            </form>

        </div>

    )

}

export default Checkout