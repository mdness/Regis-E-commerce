import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

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
        <div className='divCart'>
        <div className='pCart' >
          <p>
            Total: ${totalPrice()}
          </p>
          </div>
          <button className='aCartFin'>
          <Link to="/Checkout">
            Finalizar compra
          </Link>
        </button>
        </div>
      </>
    )
  }
}

export default Cart 