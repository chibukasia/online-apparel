import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductItem ({cart, setCart, itemQuantity, handleQuantityIncrease, handleQuantityDecrease}){
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        id: 0,
        apparel_name: '',
        description: '',
        price: 0,
        image: '',
        category: '',
        gender: '',
        quantity: 0,
        size: [],
        colors: '',
    });
const [itemSize, setItemSize] = useState('');
const [inStock, setInStock] = useState(true);
    const params =useParams();
    // fetch the particular product
    useEffect (()=>{
        fetch(`http://localhost:3000/apparells/${params.id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            
        })
    },[params.id]);
    const {id, apparel_name, description, price, image, category, gender,in_stock, quantity,rating, size, colors} = product;

    useEffect(()=>{
        if(in_stock <=0){
            setInStock(false)
        }
    }, [in_stock])

    function handleColor(e){
        setItemSize (e.target.value);
    }

    const unrepeatedSizes = [...new Set(size)]
    const sizes = unrepeatedSizes.map(item=>{
        return <button key={item} className="size-buttons" onClick={handleColor} value={item}>{item} </button>
    })
    const newQuantity = quantity + itemQuantity;
    const cartObj ={
        id: id,
        apparel_name: apparel_name,
        description: description,
        price: price,
        image: image,
        category: category,
        gender: gender,
        quantity: newQuantity,
        size: itemSize,
        colors: colors,
    }

    // add to cart
    function handleSubmit(){
        if (inStock){
            if (cart.some(item=>item.id===cartObj.id)){
                alert(`${apparel_name}Item alredy exist in cart`);
                navigate('/cartpage')

            }else {
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
                        setCart(cartItems);
                        alert(`${apparel_name} added to cart`)
                        navigate('/cartpage')
                })
                .catch(err=>{
                    console.log(err)   
                })
            }
        }else{
            alert(`${apparel_name} is out of stock`)
        }
    }
    
    return (
        <div className="product-item">
            <div className="product-title">
                <h2>{apparel_name}</h2>
            </div>
            <div className="card-item">
                <div className="image">
                    <img className="img"
                    src={image} 
                    alt={apparel_name} width={400+'px'} height={400+'px'}
                    />
                </div>
                <div className="product-details">
                    <h6>{apparel_name}</h6>
                    <hr/>
                    <h6>Category</h6>
                    <h6><span style={{color: '#434344'}}>{category}</span></h6>
                    <hr/>
                    <h6>Price</h6>
                    <h6><span style={{color: '#434344'}}>KSH {price}</span></h6>
                    <hr/>
                    <h6>Rating</h6>
                    <h6><span style={{color: '#434344'}}>{rating}</span></h6>
                    <hr/>
                    <h6>Gender</h6>
                    <h6><span style={{color: '#434344'}}>{gender}</span></h6>
                    <hr/>
                    <h6>Size</h6>
                    <h6><span style={{color: '#434344'}}>{sizes}</span></h6>
                    <hr/>
                    <h6>Color</h6>
                    <button style={{backgroundColor: colors}} className="div-color"></button>
                    <hr/>
                    <button type="button" className="btn btn-light" onClick={handleQuantityDecrease}>-</button>
                    <span>{newQuantity}</span>
                    <button type="button" className="btn btn-light" onClick={handleQuantityIncrease}>+</button>
                    {itemSize==='' ? <button type="button" className="btn btn-primary" disabled={true}>Add To Cart</button> : <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add To Cart</button> }                   
                </div>
                
            </div>
            <div className="reviews">
                <hr/>
                <h4>Description</h4>
                <p>{description}</p>
                <hr/>
                <h3>Reviews and comments</h3>
                <hr/>
            </div>
            
        </div>
    )
}

export default ProductItem;