import React from "react";

function ProductItem (){
    return (
        <div className="product-item">
            <div className="product-title">
                <h2>Product Title</h2>
            </div>
            <div className="card-item">
                <div className="image">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Df6LJJSgOok1x9w7RB2bcO57cPeyZHS9ew&usqp=CAU" 
                    alt="product" width={400+'px'} height={400+'px'}
                    />
                </div>
                <div className="product-details">
                    <h6>Title</h6>
                    <hr/>
                    <h6>Price</h6>
                    <hr/>
                    <p>Description</p>
                    <hr/>
                    <h6>Rating</h6>
                    <hr/>
                    <h6>Size</h6>
                    <hr/>
                    <h6>Color</h6>
                    <hr/>
                    <button type="button" className="btn btn-light">-</button>
                    <span>Quatinty</span>
                    <button type="button" className="btn btn-light">+</button>
                    <button type="button" className="btn btn-primary">Add To Cart</button>                   
                </div>
            </div>
            <div className="reviews">
                <hr/>
                <h3>Reviews and comments</h3>
                <hr/>
            </div>
            
        </div>
    )
}

export default ProductItem