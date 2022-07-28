import React from 'react'
import Item from './Item'

const ItemList = ({prenda}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
       {
         prenda.map((item,i)=>
          <Item key={item.id} name={item.nombre}/>
         )
       } 
    </div>
  )
}

export default ItemList