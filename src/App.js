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
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

  function handleQuantityIncrease(){
    setItemQuantity ((itemQuantity=> itemQuantity + 1));
  }

  // handle decrease in quantity
  function handleQuantityDecrease(){
      if (itemQuantity > 0){
          setItemQuantity ((itemQuantity=> itemQuantity - 1));
      }
      
  }
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={<Homepage apparels={apparels} setApparels={setApparels} cart={cart} setCart={setCart}/>}/>
          <Route exact path='/cartpage' 
            element={<CartPage 
            cart={cart} 
            setCart={setCart}
          />} />
          <Route exact path='/additem' element={<AddNewItemForm apparels={apparels} setApparels={setApparels}/>}/>
          <Route exact path='/:id' 
            element={<ProductItem 
            cart={cart} 
            setCart={setCart}
            itemQuantity={itemQuantity}
            handleQuantityIncrease={handleQuantityIncrease}
            handleQuantityDecrease={handleQuantityDecrease}
            />}  />
        </Routes> 
        {/* <div>
          <Footer />  
        </div>      */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
