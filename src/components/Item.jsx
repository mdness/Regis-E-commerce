import React from 'react'
import ItemCount from './ItemCount'

const Item = ({name}) => {
  return (
    <div className='divItem'>
       {name}
       <ItemCount/>
    </div>
  )
}

export default Item