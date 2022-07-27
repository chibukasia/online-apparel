import React from "react";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
function CartPage() {
  return (
    <div className="table-content">
      <table className="cart-table">
        <thead>
          <tr>
            <th colSpan={2}>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
            <CartItem />
        </tbody>
      </table>
      <div className="cart-total">
        <CartTotal />
      </div>
      
    </div>
  );
}

export default CartPage;
