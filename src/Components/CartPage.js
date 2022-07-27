import React from "react";
import CartTotal from "./CartTotal";

function CartPage(){
    return (
        <div className="main-content">
            <table>
                <thead>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <CartTotal />
        </div>
    )
}

export default CartPage;