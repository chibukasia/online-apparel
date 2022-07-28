import React, {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";


function Item ({apparel}){
    const [inStock, setInStock] = useState(true);

    useEffect(()=>{
        if(apparel.in_stock <=0){
            setInStock(false)
        }
    }, [apparel.in_stock])
    
    // clicking on image to view product
    function handleImgClick(){
        return <Link to='/:id' className="btn btn-primary">Add To Cart</Link>
    }

    // button click to add to cart
    let msg
    function handleButtonClick(){
        msg = <div className="callout callout-info">product added succesfully</div>
        return msg;
    }
    return (
        <div className="card" style={{width: '8 em', margin:10+'px'}}>
            <img src={apparel.image} className="card-img-top" onClick={handleImgClick}/>
            <div className="card-body">
                <h6 className="card-title">{apparel.apparel_name}</h6>
                <h6 className="card-title">Ksh {apparel.price} /-</h6>
                {!inStock ? <h6 style={{color: 'red'}}>Out of stock</h6>: null}
                <button className="btn btn-primary"  onClick={handleButtonClick}>Add To Cart</button>
                {msg}
            </div>
        </div>
    )
}

export default Item;