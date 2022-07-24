import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({título,precio}) => {
  return (
    <div className='divItemListContainer'>
        <h1>{título}</h1>
        <p>{precio}</p>
        <ItemCount/>
    </div>
    
  )
}

export default ItemListContainer