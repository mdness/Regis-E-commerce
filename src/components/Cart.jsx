import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      nombre: "Micaela",
      email: "micaela@gmail.com",
      phone: "1122334455",
      address: "Cnel. A García 5010",
    },

    items: cart.map(product => ({ id: product.id, title: product.id, price: product.id})), 
    total: totalPrice(),
  }

  const clickCompra = () => {

    const querydb = getFirestore();
    const orderCollection = collection(querydb, 'orders');
    addDoc(orderCollection, order)
    .then(({ id }) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
      <div className='divCart'>
      <p>Tu carrito está vacío</p>
      <button className='divACart'>
      <Link className='aCart' to='/'>Continuar comprando</Link>
      </button>
      </div>
      </>
    );
  } else {
  return (
    <>
    {
      cart.map(prenda => <ItemCart key={prenda.id} prenda={prenda} />)
    }
    <div className='pCart' >
    <p>
      Total: ${totalPrice()}
    </p>
    <button onClick={clickCompra}>Finalizar compra</button>
    </div>
    </>
  )
  }
}

export default Cart 