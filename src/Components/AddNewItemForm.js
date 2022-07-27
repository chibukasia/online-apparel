import React from "react";

function AddNewItemForm (){
    return (
        <div className="add-product">
            <form>
                <label htmlFor="fname">Product Name</label>
                <input type="text" id="name" name="apparel_name" placeholder="Product name.."/>

                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" name="description" placeholder="Describe the product.."/>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="Enter product price.."/>
                <label htmlFor="image">Image Url</label>
                <input type="text" id="image" name="image" placeholder="Enter image url.."/>

                <label htmlFor="category">Category</label>
                <select id="category" name="category" className="product-filter">
                    <option value={"All"}>All</option>
                    <option value={"T-Shirt"}>T-Shirt</option>
                    <option value={"Shirt"}>Shirts</option>
                    <option value={"Jacket"}>Jackets</option>
                    <option value={"Hoods"}>Hoods</option>
                </select><br/>
                <label htmlFor="category">Gender and Age</label>
                <select id="gender" name="gender" className="product-filter">
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"children"}>Chilren</option>
                    <option value={"unisex"}>Unisex</option>
                </select><br/>
                <label htmlFor="stock">Price</label>
                <input type="number" id="stock" name="in_stock" placeholder="Enter product quantity.."/>
                <label htmlFor="rating">Price</label>
                <input type="number" id="rating" name="rating" placeholder="Enter product rating.."/>
                <div className="size-filter">
                    <label htmlFor="size" className="product-filter">Select Size</label><br/>
                    <div className="checked-input" id="size">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="extraLarge" id="xlarge"/>
                            <label className="form-check-label" htmlFor="xlarge">
                                XL
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="large" id="large"/>
                            <label className="form-check-label" htmlFor="large">
                                L
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="small" id="small"/>
                            <label className="form-check-label" htmlFor="small">
                                S
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="xsmall" id="xsmall"/>
                            <label className="form-check-label" htmlFor="xsmall">
                                XS
                            </label>
                        </div>
                    </div>
                </div>  
                <label htmlFor="color">Color</label><br/>
                <input type="color" id="color" name="color" placeholder="Select color.." onChange={(e)=>console.log(e.target.value)}/>
            
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddNewItemForm;