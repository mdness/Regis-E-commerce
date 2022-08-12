import './App.css'
import NavBar from "./components/NavBar"
import Carousel from './components/Carousel'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './components/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
         <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
         <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
         <Route path='/carrito' element={<Cart/>} />
      </Routes>
      </CartProvider>
      {/* <Carousel /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
