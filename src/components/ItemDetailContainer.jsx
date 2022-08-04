import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [itemClothes, setItemClothes] = useState([])

    const { categoriaId } = useParams();

    useEffect(() => {

        let prendasDatos = [
            {
                id: 1,
                nombre: "Vestido Medusa",
                imagen: '../media/clothes12.jpg',
                categoria: "vestidos"
            },
            {
                id: 2,
                nombre: "Top Tasharys",
                imagen: "../media/clothes7.jpg",
                categoria: "remeras"
            },
            {
                id: 3,
                nombre: "Pollera Dracarys",
                imagen: "../media/clothes10.jpg",
                categoria: "polleras"
            },
            {
                id: 4,
                nombre: "Vestido Valkyria",
                imagen: "../media/clothes4.jpg",
                categoria: "vestidos"
            },
            {
                id: 5,
                nombre: "Pollera Skyfire",
                imagen: "../media/clothes8.jpg",
                categoria: "polleras"
            },
            {
                id: 6,
                nombre: "Remera Mistborn",
                imagen: "../media/clothes5.jpg",
                categoria: "remeras"
            },

        ]

        const promesaClothes = new Promise((res, rej) => {
            setTimeout(() => {
                res(prendasDatos)
            }, 2000);
        });

        if (categoriaId) {
            promesaClothes.then(res => setItemClothes(res.filter(remeras => remeras.categoria === categoriaId)));
            } else if (categoriaId) {
                promesaClothes.then(res => setItemClothes(res.filter(polleras => polleras.categoria === categoriaId)));
            } else {
            promesaClothes.then(res => setItemClothes(res));
            }
   }, [categoriaId]);
    return (
        <>
            <div className='divItemListContainer'>
                <ItemList prenda={itemClothes} />
            </div>
        </>
    )
}

export default ItemDetailContainer