import React from "react";

function CartItem (){
    return (
        <div className="product-item">
            <div className="card-item">
                <div>
                    <img src="" alt="product"/>
                </div>
                <div>
                    <h6>Title</h6>
                    <h6>Price</h6>
                    <p>Description</p>
                    <h6>Size</h6>
                    <h6>Color</h6>
                    <button>+</button>
                    <h6>Quatinty</h6>
                    <button>-</button>
                    <h6>Rating</h6>
                </div>
            </div>
        </div>
    )
}

export default CartItem