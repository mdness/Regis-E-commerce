import React from 'react'
import ItemCount from './ItemCount'

const Item = ({name, imagen}) => {
  return (
    <div className='divItem'>
       {imagen}
       {name}
       <ItemCount/>
    </div>
  )
}

export default Item