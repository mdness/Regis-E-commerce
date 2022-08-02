import './App.css'
import NavBar from "./components/NavBar"
import Carousel from './components/Carousel'
import ItemListContainer from './components/ItemListContainer'
import Video from './components/Video'
import NewProduct from './components/NewProduct'


function App() {
  return (
    <>
      <NavBar />
      <Video />
      <NewProduct />
      <ItemListContainer />
      {/* <Carousel /> */}
    </>
  );
}

export default App;
