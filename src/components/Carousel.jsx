import React from 'react';
import clothes3 from "../media/clothes3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import clothes12 from '../media/clothes12.jpg';
import clothes6 from '../media/clothes6.jpg';

function IndividualIntervalsExample() {
  return (
    <Carousel className='carouselall'>
      <Carousel.Item interval={1000}>
        <img
          className="carousel  d-block w-100"
          src={clothes3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='' >Vestido Valkiria</h3>
          <p className=''>Vestido de tul con decorado de flores</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item  className='' interval={500}>
        <img
          className="carousel d-block w-100"
          src={clothes12}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className=''>Second slide label</h3>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel d-block w-100 "
          src={clothes6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className=''>Third slide label</h3>
          <p className=''>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
