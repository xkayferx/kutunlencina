import './App.css';
import  Menu  from './components/Navbar.js';
import ItemListContainer from './ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner.js';

function App() {
  return (

    <BrowserRouter>
    
      <div className="App">
    
        <header className="App-header">
    
          <Menu />

        </header>
          
        <Routes>

          <Route path="/" element={ <ItemListContainer /> } />

          <Route path="/category/:id" element={ <ItemListContainer /> } />

          <Route path="/item/:id" element={ <ItemDetailConteiner /> } />

        </Routes>
    
      </div>
    
    </BrowserRouter>
  );
}

export default App;
