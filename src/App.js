import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';
import AddNewItemForm from './Components/AddNewItemForm';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route exact path='/cartpage' element={<CartPage />}/>
          <Route exact path='/additem' element={<AddNewItemForm />}/>
        </Routes>        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
