import React from 'react'
import { useState } from 'react'
import { useCartContext } from './CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const { cart, totalPrice } = useCartContext();
    const [orderId, setOrderId] = useState("");

    function finalForm() {
        const order = {
            buyer: { name, tel, email },
            items: cart.map((prenda) => ({ id: prenda.id, title: prenda.title, price: prenda.price, quantity: prenda.quantity })),
            total: totalPrice(),
        };

        const querydb = getFirestore();
        const orderCollection = collection(querydb, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => {
                setOrderId(id);
            });
    }


    return (
        <>
            {orderId ? (
                "Gracias por tu compra! Tu ID de compra es: " + orderId
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
                            type={"address"}
                            placeholder="Dirección de envío"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                     
                    </div>
                    <button className="aItemDetail" onClick={finalForm}>Enviar y finalizar compra</button>
                </div>
            )}
        </>
    );
}

export default Checkout