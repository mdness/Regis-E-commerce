import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer() {
 const [itemClothes, setItemClothes] = useState([])

 useEffect (()=>{
  
  let prendasDatos = [
    {
      id:1,
      nombre:"Vestido Medusa",
      imagen:'../media/clothes12.jpg'
    },
    {
      id:2,
      nombre:"Top Tasharys",
      imagen:"../media/clothes7.jpg"
    },
    {
      id:3,
      nombre:"Pollera Dracarys",
      imagen:"../media/clothes10.jpg"
    },
    {
      id:4,
      nombre:"Vestido Valkyria",
      imagen:"../media/clothes4.jpg" 
    },
    {
      id:5,
      nombre:"Pollera Skyfire",
      imagen:"../media/clothes8.jpg"
    },
    {
      id:6,
      nombre:"Sweater Mistborn",
      imagen:"../media/clothes5.jpg"
    },
  
  ]

  const promesaClothes = new Promise((res, rej) => {
    setTimeout(() => {
      res(prendasDatos)
    }, 2000);
  });

  promesaClothes.then((prenda)=>{
    setItemClothes(prenda);
  });
},[]);

  return (
    <>
    <div className='divItemListContainer'>
        <ItemList prenda={itemClothes}/>
    </div>
    </>
  )
  }

