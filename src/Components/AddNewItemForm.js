import React, { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"

function AddNewItemForm ({apparels, setApparels}){

    // add new item to the online store
    const [formData, setFormData] = useState({
        apparel_name: '',
        description: '',
        price: 0,
        image: '',
        category: '',
        gender: '',
        in_stock: 0,
        rating: 0,
        size: [],
        color: '',
    });

    const navigate = useNavigate();
    const form = useRef(null);
    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;

        if (name==='size'){
            setFormData({...formData,[name]: [...formData.size, value]})
        }
        else{
            setFormData({...formData, [name]: value})
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        
        fetch('http://localhost:3000/apparells', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            const collectiveApparels = [...apparels, data]
            setApparels(collectiveApparels);
            alert('Product added succesfully')
            navigate('/')
        })
        form.current.reset()
    }

    return (
        <div className="add-product">
            <h2>Add Product To Shop</h2>
            <form onSubmit={handleSubmit} ref={form}>
                <label htmlFor="fname">Product Name</label>
                <input type="text" id="name" name="apparel_name" placeholder="Product name.." onChange={handleChange}/>

                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" name="description" placeholder="Describe the product.." onChange={handleChange}/>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="Enter product price.." onChange={handleChange}/>
                <label htmlFor="image">Image Url</label>
                <input type="text" id="image" name="image" placeholder="Enter image url.." onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" placeholder="Eg Jackest, Trousers, Hoods, Shirts, Dresses.." onChange={handleChange}/>
                <label htmlFor="category">Gender and Age</label>
                <select id="gender" name="gender" className="product-filter" onChange={handleChange}>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"children"}>Chilren</option>
                    <option value={"unisex"}>Unisex</option>
                </select><br/>
                <label htmlFor="stock">Quantiry</label>
                <input type="number" id="stock" name="in_stock" placeholder="Enter product quantity.." onChange={handleChange}/>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" name="rating" placeholder="Enter product rating.." onChange={handleChange}/>
                <div className="size-filter">
                    <label htmlFor="size" className="product-filter">Select Size</label><br/>
                    <div className="checked-input" id="size">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="size" value="XL" id="xlarge" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="xlarge">
                                XL
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="size" value="L" id="large" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="large">
                                L
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="size" value="S" id="small" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="small">
                                S
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="size" value="XS" id="xsmall" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="xsmall">
                                XS
                            </label>
                        </div>
                    </div>
                </div>  
                <label htmlFor="color">Color</label><br/>
                <input type="color" id="color" name="colors" placeholder="Select color.." onChange={handleChange}/>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddNewItemForm;