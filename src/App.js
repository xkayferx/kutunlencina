import logo from './logo.svg';
import './App.css';
import  Menu  from './components/Navbar.js';
import ItemListContainer from './ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />

        <ItemListContainer />

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
