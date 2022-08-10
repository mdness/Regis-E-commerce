import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Video from './Video';
import NewProduct from './NewProduct'


export default function ItemListContainer() {
const [data, setData] = useState([])

const { categoriaId } = useParams();

useEffect(() => {

    const prendasDatos = [
        {
            id: 1,
            nombre: "Vestido Medusa",
            imagen: "https://i.pinimg.com/564x/62/a7/92/62a7921230eeaf8b37aa5264994a23c2.jpg",
            categoria: "vestidos"
        },
        {
            id: 2,
            nombre: "Top Tasharys",
            imagen: "https://i.pinimg.com/564x/aa/54/6b/aa546b11203e75e863150e431b245f74.jpg",
            categoria: "remeras"
        },
        {
            id: 3,
            nombre: "Pollera Dracarys",
            imagen: "https://i.pinimg.com/564x/1a/57/cc/1a57cc51ca8060af0838d990dd4ec8e3.jpg",
            categoria: "polleras"
        },
        {
            id: 4,
            nombre: "Vestido Valkyria",
            imagen: "https://i.pinimg.com/564x/68/e5/d9/68e5d9d83fd541b3abdae965c13aaf14.jpg",
            categoria: "vestidos"
        },
        {
            id: 5,
            nombre: "Pollera Skyfire",
            imagen: "https://i.pinimg.com/736x/07/ca/fc/07cafcf04916ff20c4d50bdd49660d9b.jpg",
            categoria: "polleras"
        },
        {
            id: 6,
            nombre: "Top Mistborn",
            imagen: "https://i.pinimg.com/736x/70/7b/39/707b39ce3351f83e4447fa4bf6b1d12e.jpg",
            categoria: "remeras"
        },

    ]

    const getData = new Promise((res, rej) => {
        setTimeout(() => {
            res(prendasDatos)
        }, 2000);
    });

    if (categoriaId) {
        getData.then(res => setData (res.filter(remeras => remeras.categoria === categoriaId)));
        } else if (categoriaId) {
            getData.then(res => setData(res.filter(polleras => polleras.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
}, [categoriaId]);
return (
    <>
     <Video />
      <NewProduct />
        <div className='divItemListContainer'>
            <ItemList prendas={data} />
            
        </div>
    </>
)
}

