import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Video from './Video';
import NewProduct from './NewProduct'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


export default function ItemListContainer() {
const [data, setData] = useState([]);
const { categoriaId } = useParams();

useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'prendas' );
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(prenda => ({id: prenda.id, ...prenda.data() }))))

//     if (categoriaId) {
//        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
//     getDocs(queryCollection)
//     .then(res => setData(res.docs.map(prendas => ({ id: prendas.id, ...prendas.data() }))))
//         } else {
//            getDocs(queryCollection)
//            .then(res => setData(res.docs.map(prendas => ({ id: prendas.id, ...prendas.data() }))))
//         }
}, [categoriaId]);

return (
    <>
     <Video />
      <NewProduct />
        <div className='divItemListContainer'>
            <ItemList data={data} />
            
        </div>
    </>
)
}

