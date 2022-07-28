import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
 const [itemClothes, setItemClothes] = useState([])

 useEffect (()=>{

  setTimeout(()=> {

  
  setItemClothes([
    {
      id:1,
      nombre:"Vestido Medusa"
    },
    {
      id:2,
      nombre:"Top Tasharys"
    },
    {
      id:3,
      nombre:"Pollera Dracarys"
    },
    {
      id:4,
      nombre:"Top Valkyria"
    },
    {
      id:5,
      nombre:"Pollera Skyfire"
    },
    {
      id:6,
      nombre:"Top Mistborn"
    },
  
  ])
}, 3000)
},[])

  return (
    <>
    <div className='divItemListContainer'>
        <ItemList prenda={itemClothes}/>
    </div>
    </>
  )
}

export default ItemListContainer