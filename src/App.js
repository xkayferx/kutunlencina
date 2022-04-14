import './App.css';
import  Menu  from './components/Navbar.js';
import ItemListContainer from './ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner.js';
import { CartContext } from './components/CartContext';
import { useState } from 'react';

function App() {
  
  const [cart, setCart] = useState([])

  const addItem = (item) => {

    setCart ( [...cart, item] )
  }
  
  return (

    <CartContext.Provider value={ {cart, addItem} }>

      <BrowserRouter>
    
        <div className="App">
        
          <Menu />
          
          <Routes>

            <Route path="/" element={ <ItemListContainer /> } />

            <Route path="/category/:categoryid" element={ <ItemListContainer /> } />

            <Route path="/item/:id" element={ <ItemDetailConteiner /> } />

          </Routes>
    
        </div>
    
      </BrowserRouter>
    
    </CartContext.Provider>
  
  );

}

export default App;
