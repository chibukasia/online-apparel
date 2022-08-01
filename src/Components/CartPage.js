import React, { useEffect } from "react";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";


function CartPage({cart, setCart}) {

  // fetch items in cart
  useEffect(()=>{
    fetch('http://localhost:3000/cart')
    .then(res=>res.json())
    .then(data=>{
      setCart(data);
    })
  },[]);

  function handleCartUpdate(updatedData){
    const updatedItems = cart.map(item=>{
      if (item.id===updatedData.id){
        return updatedData;
      }else{
        return item;
      }
    })

    setCart(updatedItems);
  }
  
  //loop through items in cart to display each item
  const cartList = cart.map(item=>{
    return <CartItem 
      key={item.id} 
      id = {item.id}
      image={item.image} 
      price={item.price} 
      quantity={item.quantity} 
      name={item.apparel_name} 
      cart={cart} 
      setCart={setCart}
      handleCartUpdate={handleCartUpdate}
      />
  })
  return (
    <div className="table-content">
      <table className="cart-table" style={{overflowX: 'auto'}}>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
            {cartList}
        </tbody>
      </table>
      <div className="cart-total">
        <CartTotal cart={cart}/>
      </div>
      
    </div>
  );
}

export default CartPage;
