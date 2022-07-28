import React, {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";


function Item ({apparel, cart, setCart}){
    const [inStock, setInStock] = useState(true);
    const [inCart, setInCart] = useState(false);

    const cartObj ={
        id: apparel.id,
        apparel_name: apparel.apparel_name,
        description: apparel.description,
        price: apparel.price,
        image: apparel.image,
        category: apparel.category,
        gender: apparel.gender,
        quantity: 1,
        size: ['L'],
        color: apparel.color,
    }

    useEffect(()=>{
        if(apparel.in_stock <=0){
            setInStock(false)
        }
    }, [apparel.in_stock])
    
    // clicking on image to view product
    function handleImgClick(){
        return <Link to='/:id' className="btn btn-primary">Add To Cart</Link>
    }
    
    function handleButtonClick(){
        // console.log(cardIds)
        if (inStock){
            // if(cart.some(item=>item.id===cartObj.id)){
            //     console.log('yes')
            // }else{
            //     console.log('no')
            // }
            fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartObj)
            })
            .then(res=>res.json())
            .then(data=>{
                    const cartItems = [...cart, data];
                    setCart(cartItems)
            })
            .catch(err=>{
                alert('Item already exists in cart')
                
            })
            
        }else{
            alert(`${apparel.apparel_name} is out of stock`)
        }
       
    }
    return (
        <div className="card" style={{width: '8 em', margin:10+'px'}}>
            <img src={apparel.image} className="card-img-top" onClick={handleImgClick}/>
            <div className="card-body">
                <h6 className="card-title">{apparel.apparel_name}</h6>
                <h6 className="card-title">Ksh {apparel.price} /-</h6>
                {!inStock ? <h6 style={{color: 'red'}}>Out of stock</h6>: null}
                <button className="btn btn-primary"  onClick={handleButtonClick}>Add To Cart</button> 
            </div>
        </div>
    )
}

export default Item;