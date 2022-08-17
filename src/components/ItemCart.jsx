import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({prenda}) => {

    const {removerPrenda} = useCartContext();
  return (
    <div className='ItemCart'>
        <img src={prenda.imagen} alt="" />
        <div className='divItemCart'>
            <p>Título: {prenda.titulo}</p>
            <p>Cantidad: {prenda.quantity}</p>
            <p>Precio: {prenda.precio}</p>
            <p>Subtotal: ${prenda.quantity * prenda.precio} </p>
            <button onClick={() => removerPrenda(prenda.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart