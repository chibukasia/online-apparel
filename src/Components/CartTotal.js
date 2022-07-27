import React from "react";

function CartTotal (){
    return (
        <div className="cart-total">
            <table>
                <thead>
                    <tr>
                    <th>Cart Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Subtotal: </td>
                        <td> 1000 </td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td>1000 </td>
                    </tr>
                    <tr><td><button>Proceed To Checkout</button></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTotal