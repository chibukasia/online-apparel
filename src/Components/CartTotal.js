import React from "react";

function CartTotal ({cart}){

    // calculate the total price of items in cart
    const total = cart.reduce(addTotal, 0);
    function addTotal(accum, item){
        let itemTotal = item.price * item.quantity;
        return accum += itemTotal;
    }
    return (
        <div className="cart-total">
            <table className="cart-total-table">
                <thead>
                    <tr>
                    <th colSpan={2}>CART TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SUBTOTAL: </td>
                        <td>KSH {total} </td>
                    </tr>
                    <tr>
                        <td>TOTAL: </td>
                        <td>KSH {total} </td>
                    </tr>
                    <tr ><td colSpan={3}><button className="checkout-btn">Proceed To Checkout</button></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTotal