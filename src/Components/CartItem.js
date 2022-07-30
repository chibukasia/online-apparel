import React,{useEffect, useState} from "react";

function CartItem({id, image, name, price, quantity, cart, setCart, handleCartUpdate}) {
  
  const [itemQuantity, setItemQuantity] = useState(quantity);
  //const newQuantity = quantity + itemQuantity
  const subTotal = price * itemQuantity;

  function handleQuantityIncrease(){
    setItemQuantity ((itemQuantity)=> itemQuantity + 1);
    // update the quantity in database
    fetch(`http://localhost:3000/cart/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        quantity: itemQuantity
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      handleCartUpdate(data)
    }
    )
  }

  // handle decrease in quantity
  function handleQuantityDecrease(){
      if (itemQuantity > 0){
          setItemQuantity ((itemQuantity)=> itemQuantity - 1);
          fetch(`http://localhost:3000/cart/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            quantity: itemQuantity
          })
        })
        .then(res=>res.json())
        .then(data=>{
          handleCartUpdate(data)})
      }
      
  }
  
  useEffect(()=>{
    //console.log(itemQuantity)
  },[itemQuantity])
  //delete an item from cart
  function handleDelete(){
    if(window.confirm('Are you sure you want to delete '+ name +'from cart?')){
      fetch(`http://localhost:3000/cart/${id}`,{method: 'DELETE'})
      .then(res=>res.json())
      .then(()=>{
        const undeleteCartItems = cart.filter(item=>item.id !== id);
        setCart(undeleteCartItems)
      })
    }
    
  }

  return (
    <tr>
      <td><button className="remove-item-cart" onClick={handleDelete}>X</button></td>
      <td><img src={image} alt={name} style={{width: 50 +'px', height: 50 + 'px'}}/></td>
      <td>{name}</td>
      <td><span>KSH {price}</span></td>
      <td>
      <button type="button" className="btn btn-light" 
        onClick={handleQuantityDecrease}>-</button>
        <span>{itemQuantity}</span>
        <button type="button" className="btn btn-light" 
        onClick={handleQuantityIncrease}>+</button>
      </td>
      <td><span>KSH {subTotal}</span></td>
    </tr>
  );
}

export default CartItem;
