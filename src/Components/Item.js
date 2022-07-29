import React, {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";


function Item ({apparel, cart, setCart}){
    const [inStock, setInStock] = useState(true);
    //const [inCart, setInCart] = useState(false);

    const cartObj ={
        id: apparel.id,
        apparel_name: apparel.apparel_name,
        description: apparel.description,
        price: apparel.price,
        image: apparel.image,
        category: apparel.category,
        gender: apparel.gender,
        quantity: apparel.quantity,
        size: ['L'],
        colors: apparel.colors,
    }

    useEffect(()=>{
        if(apparel.in_stock <=0){
            setInStock(false)
        }
    }, [apparel.in_stock])
    
    function handleButtonClick(){
        if (inStock){
    
            if(cart.some(item=>item.id===cartObj.id)){
                alert(`${apparel.apparel_name} is already in cart`)
            }else{
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
                    console.log(err)   
                })
            }
            
            
            
        }else{
            alert(`${apparel.apparel_name} is out of stock`)
        }
       
    }
    return (
        <div className="card" style={{width: '8 em', margin:10+'px'}}>
            <Link to={`/${apparel.id}`}><img src={apparel.image} className="card-img-top"/></Link>
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