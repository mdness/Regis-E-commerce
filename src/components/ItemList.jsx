import React from 'react'
import Item from './Item'


const ItemList = ({ data }) => {
  return (
    <div className='divItemList'>
      {
        data.map(data => <Item key={data.id} info={data} />
        )
      }
    </div>
  )
}

export default ItemList