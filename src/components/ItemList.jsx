import React from 'react'
import Item from './Item'

const ItemList = ({prendas = []}) => {
  return (
    <div className='divItemList'>
       {
         prendas.map(prenda => <Item key={prenda.id} info={prenda}/>
         )
       } 
    </div>
  )
}

export default ItemList