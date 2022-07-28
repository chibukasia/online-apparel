import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';
import AddNewItemForm from './Components/AddNewItemForm';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ProductItem from './Components/ProductItem';
import React, {useState} from 'react';

function App() {
  const [apparels, setApparels] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={<Homepage apparels={apparels} setApparels={setApparels}/>}/>
          <Route exact path='/cartpage' element={<CartPage />}/>
          <Route exact path='/additem' element={<AddNewItemForm apparels={apparels} setApparels={setApparels}/>}/>
          <Route exact path='/product' element={<ProductItem/>} />
        </Routes> 
        {/* <div>
          <Footer />  
        </div>      */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
