import './App.css';
import  Menu  from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner.js';
import { CartProvider } from './components/CartContext';
import Cart from './components/cart';
import Checkout from './components/Checkout';

function App() {
  
  
  
  return (

    <CartProvider>

      <BrowserRouter>
    
        <div className="App">
        
          <Menu />
          
          <Routes>

            <Route exact path="/" element={ <ItemListContainer /> } />

            <Route path="/categoria/:categoryId" element={ <ItemListContainer /> } />

            <Route path="/item/:itemId" element={ <ItemDetailConteiner /> } />

            <Route path="/cart" element={ <Cart /> } />

            <Route path="/checkout" element={ <Checkout /> } />

          </Routes>
    
        </div>
    
      </BrowserRouter>
  
    </CartProvider>
  
  );

}

export default App;
