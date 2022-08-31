import React from 'react'
import { useState } from 'react'
import { useCartContext } from './CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [adress, setAdress] = useState("");
    const { cart, totalPrice, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState("");

    const order = {
        buyer: { name, tel, email, adress },
        total: totalPrice(),
        cart,
    };


    const finalForm = () => {
        const querydb = getFirestore();
        const orderCollection = collection(querydb, 'orders');
        addDoc(orderCollection, order).then((res) => {
            setOrderId(res.id);
            clearCart();
        });

    };




    return (
        <>
            {orderId ? (
                <div className='divOneForm'>
                    <h1 className='h1Form'>
                        Gracias por tu compra!
                    </h1>
                    <p className='pForm'>
                        Tu id de compra es: {orderId}
                    </p>
                </div>
            ) : (
                <div className='divForm'>
                    <p >
                        Ingrese sus datos
                        <br />
                    </p>
                    <div className="formulario">
                        <input
                            type={"text"}
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />

                        <input
                            type={"tel"}
                            placeholder="Tu celular"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                        <br />

                        <input
                            type={"email"}
                            placeholder="Tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />

                        <input
                            type={"adress"}
                            placeholder="Dirección de envío"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />

                    </div>
                    <button className="aItemDetail" onClick={finalForm}>Enviar y finalizar compra</button>
                </div>
            )}
        </>
    );
}

export default Checkout