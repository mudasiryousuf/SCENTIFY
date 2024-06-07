import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "./componants/Navbar";
import Shop from './componants/pages/shop/Shop';
import Cart from './componants/pages/cart/Cart';
import About from './componants/pages/about/About';
import ShopContextProvider from './Context/ShopContext';
import ContactUs from './componants/pages/Contact/ContactUs';
import Home from './componants/pages/Home/Home';

function App() {
  return (
    <div className='App'>
     <ShopContextProvider>
     <Router>
   
       <Navbar/>
      <Routes>
        <Route exact path='/'  element={<Shop/>}/>
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<ContactUs/>} />
        <Route exact path='/home' element={<Home/>} />
      </Routes>
     </Router>
     </ShopContextProvider>

     
     </div>
    
  );
}

export default App;
