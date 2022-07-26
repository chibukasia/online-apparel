import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route exact path='/cartpage' element={<CartPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
