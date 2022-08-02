import React from 'react'
import clothes2 from '../media/clothes2.jpg'

const NewProduct = () => {
  return (
    <div className="NewProduct">
    <img src={clothes2} alt="" />
    <div className="NewProductDesc">
    <h2>VESTIDO <br /> CASSANDRA  <br /> EDICIÓN  <br /> LIMITADA</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo magnam vitae debitis nemo, cumque repellendus? Laudantium minus voluptates sit nesciunt a nisi ad blanditiis hic provident quidem, fugiat veritatis.</p>
  </div>
  </div>
  )
}

export default NewProduct