import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function ItemCount () {
 
 const [contador, setContador] = useState(0)
  
    return (
    <div className='divCount'>
        <div>
        <button disabled={contador == 0}className='buttonCount' onClick={() => setContador(contador-1)}><FontAwesomeIcon icon ={faMinus}/></button>
        <p>{contador}</p>
        <button className='buttonCount' onClick={() => setContador(contador+1)}><FontAwesomeIcon icon ={faPlus}/></button>
        </div>
        <div>
        <button className='buttonAgregarCarrito'>Agregar al carrito</button>
        </div>
    </div>
  )
}
