import React from "react";

function CartItem({id, image, name, price, quantity, cart, setCart}) {

  const subTotal = price * quantity;

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
      <td>{price}</td>
      <td>{quantity}</td>
      <td>KSH {subTotal}</td>
    </tr>
  );
}

export default CartItem;
