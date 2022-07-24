import React from 'react'
import ItemListContainer from './ItemListContainer'

const Productos = () => {
  return (
    <>
    <div className='productosDiv'>
    Prendas
    </div>
    <div className='productosDivItemListContainer'>
    <ItemListContainer título ='Pollera Dracarys' precio ='$2.500'/>
    <ItemListContainer título ='Vestido Medusa' precio ='$5.400'/>
    <ItemListContainer título ='Top Tasharys' precio ='$1.600'/>
    </div>
    </>
  )
}

export default Productos