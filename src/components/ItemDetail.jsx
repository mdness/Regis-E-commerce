import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount"

const ItemDetail = ({ data }) => {
  const [alCarrito, setAlCarrito] = useState(false)

  const onAdd = (quantity) => {
   setAlCarrito(true);
  }

  return (
    <div className='container'>
      <div className='detail'>
        <img src={data.imagen} alt="" />
        <div className='content'>
          <h1>{data.nombre}</h1>
          {
            alCarrito 
            ? <Link to="/carrito" className='a'>Terminar compra</Link>
            : <ItemCount onAdd={onAdd} />
          }

        </div>
      </div>
    </div>
  );
}

export default ItemDetail