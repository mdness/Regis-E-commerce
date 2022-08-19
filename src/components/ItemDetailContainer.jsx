import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

// const ropa = [
//     {
//         id: 1,
//         nombre: "Vestido Medusa",
//         imagen: "https://i.pinimg.com/564x/62/a7/92/62a7921230eeaf8b37aa5264994a23c2.jpg",
//         categoria: "vestidos", 
//         precio: 2500
//     },
//     {
//         id: 2,
//         nombre: "Top Tasharys",
//         imagen: "https://i.pinimg.com/564x/aa/54/6b/aa546b11203e75e863150e431b245f74.jpg",
//         categoria: "remeras",
//         precio: 2500
//     },
//     {
//         id: 3,
//         nombre: "Pollera Dracarys",
//         imagen: "https://i.pinimg.com/564x/1a/57/cc/1a57cc51ca8060af0838d990dd4ec8e3.jpg",
//         categoria: "polleras",
//         precio: 2500
//     },
//     {
//         id: 4,
//         nombre: "Vestido Valkyria",
//         imagen: "https://i.pinimg.com/564x/68/e5/d9/68e5d9d83fd541b3abdae965c13aaf14.jpg",
//         categoria: "vestidos",
//         precio: 2500
//     },
//     {
//         id: 5,
//         nombre: "Pollera Skyfire",
//         imagen: "https://i.pinimg.com/736x/07/ca/fc/07cafcf04916ff20c4d50bdd49660d9b.jpg",
//         categoria: "polleras",
//         precio: 2500
//     },
//     {
//         id: 6,
//         nombre: "Top Mistborn",
//         imagen: "https://i.pinimg.com/736x/70/7b/39/707b39ce3351f83e4447fa4bf6b1d12e.jpg",
//         categoria: "remeras",
//         precio: 2500
//     },

// ]

const ItemDetailContainer = () => {
   const [data, setData] = useState({})
   const {detalleId} = useParams();

   useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'prendas', detalleId);
    getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
   }, [])

    return (
        <>
           <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer