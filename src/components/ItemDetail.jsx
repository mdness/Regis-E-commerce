import React, { useState } from 'react'
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount"

const ItemDetail = ({ data }) => {
  const [alCarrito, setAlCarrito] = useState(false);

  const { addPrenda } = useCartContext();

  const onAdd = (quantity) => {
    setAlCarrito(true);
    addPrenda(data, quantity);
  }



  return (
    <div className='container'>
      <div className='detail'>
        <img src={data.imagen} alt="" />
        <div className='content'>
          <h1>{data.nombre}</h1>

          <div> {
            alCarrito
              ? <button className='aItemDetail'><Link to="/carrito">Terminar compra</Link></button>
              : <ItemCount onAdd={onAdd} />
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail