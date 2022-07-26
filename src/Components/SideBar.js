import React from "react";

function SideBar() {
  return (
    <div className="left-sidebar">
      <h5 className="product-filter">Filter Producst</h5>
      <div className="select-options">
        <label htmlFor="category" className="product-filter">Categories</label><br/>
        <select name="select" id="category" className="product-filter">
          <option value={"All"}>All</option>
          <option value={"T-Shirt"}>T-Shirt</option>
          <option value={"Shirt"}>Shirts</option>
          <option value={"Jacket"}>Jackets</option>
          <option value={"Hoods"}>Hoods</option>
        </select>
      </div>
      <div className="price-filter">
        <label htmlFor="customRange1" className="form-label">Filter By Price</label>
        <input type="range" className="form-range" id="customRange1" min="100" max="5000" onChange={(e)=>console.log(e.target.value)}></input>
      </div>
      
      <div className="radio-button">
        <div className="form-check">
            <input className="form-check-input" type="radio" name="male" id="male"/>
            <label className="form-check-label" htmlFor="female">
                Male
            </label>
            </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="female" id="female" />
            <label className="form-check-label" htmlFor="female">
                Female
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="unisex" id="unisex"/>
            <label className="form-check-label" htmlFor="unisex">
                Unisex
            </label>
            </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="children" id="children" />
            <label className="form-check-label" htmlFor="children">
                Children
            </label>
        </div>
      </div><br/>     
      <div className="size-filter">
        <label htmlFor="size" className="product-filter">Filter By Size</label><br/>
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
    </div>
  );
}

export default SideBar;
