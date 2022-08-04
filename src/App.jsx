import './App.css'
import NavBar from "./components/NavBar"
import Carousel from './components/Carousel'
import ItemListContainer from './components/ItemListContainer'
import Video from './components/Video'
import NewProduct from './components/NewProduct'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Video />
      <NewProduct />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
         <Route path='/categoria/:categoriaId' element={<ItemDetailContainer />} />
         <Route path='/carrito' element={Cart} />
      </Routes>
      
      {/* <Carousel /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
