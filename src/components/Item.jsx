import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Card className='itemCard'> 
    <Link to={`/detalle/${info.id}`}>
      <Card.Img src={info.imagen} /> 
      <Card.Body className='itemCardBody'>
        <Card.Title className='itemCardBodyTitle'>{info.nombre}</Card.Title>    
       <div className='itemCardBodyDiv'>
       </div>
    </Card.Body>
    </Link>
    </Card>
    
  )
}

export default Item