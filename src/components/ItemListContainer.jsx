import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


export default function ItemListContainer() {
const [data, setData] = useState([]);

const { categoriaId } = useParams();

useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'prendas' );
    if (categoriaId) { 
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
    } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
    }
   
}, [categoriaId]);



return (
    <>
        <div className='divItemListContainer'>
            <ItemList data={data} />
            
        </div>
    </>
)
}

