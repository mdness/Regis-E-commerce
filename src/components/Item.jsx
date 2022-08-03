import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';

const Item = ({name, imagen}) => {
  return (
    <Card className='itemCard'>
      <Card.Img src={imagen} /> 
      <Card.Body className='itemCardBody'>
        <Card.Title className='itemCardBodyTitle'>{name}</Card.Title>    
       <div className='itemCardBodyDiv'>
        <ItemCount/>
       </div>
    </Card.Body>
    </Card>
  )
}

export default Item