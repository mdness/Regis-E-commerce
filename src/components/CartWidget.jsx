import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from './CartContext'

const CartWidget = () => {
  const { totalPrendas } = useCartContext();
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} className='cartShopping' />
      <span className='spanPrendas'>{totalPrendas() || ''} </span>
    </>
  )
}

export default CartWidget