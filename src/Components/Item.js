import React from "react";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";


function Item ({apparel}){
    function handleImgClick(){
        return <Link to='/:id' className="btn btn-primary">Add To Cart</Link>
    }
    return (
        <div className="card" style={{width: '8 em', margin:10+'px'}}>
            <img src={apparel.image} className="card-img-top" style={{width: 300+'px', height:300+'px', display:'block'}} onClick={handleImgClick}/>
            <div className="card-body">
                <h6 className="card-title">{apparel.apparel_name}</h6>
                <h6 className="card-title">Ksh {apparel.price} /-</h6>
                <Link to='/:id' className="btn btn-primary">Add To Cart</Link>
            </div>
        </div>
    )
}

export default Item;