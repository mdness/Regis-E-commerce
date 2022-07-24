import './App.css'
import NavBar from "./components/NavBar"
import Productos from './components/Productos'
import clothesVdeo from './media/clothes_video.mp4'
import Carousel from './components/Carousel'
import clothes2 from './media/clothes2.jpg'


function App() {
  return (
    <>
      <NavBar />
      
      <header>
        <video autoPlay loop muted>
          <source src={clothesVdeo} type='video/mp4' />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">THE NEW SEASON NOW IN</h1>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </header>
      <div className="NewProduct">
    <img src={clothes2} alt="" />
    <div className="NewProductDesc">
    <h2>VESTIDO <br /> CASSANDRA  <br /> EDICIÓN  <br /> LIMITADA</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo magnam vitae debitis nemo, cumque repellendus? Laudantium minus voluptates sit nesciunt a nisi ad blanditiis hic provident quidem, fugiat veritatis.</p>
  </div>
  </div>
  <Productos />
  <Carousel />
    </>
  );
}

export default App;
