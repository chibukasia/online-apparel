import React, { useState } from "react";

function SideBar({apparels, setCategory, price, setPrice, setGender, size, setSize, setIsChecked}) {

  // filter products by category
  function handleCategory(e){
    setCategory(e.target.value); 
  }
  
  // filter products by price
  function handlePriceRange (e){
    setPrice(e.target.value);
  }

  //filter by radio buttons 
  function handleRadioSelection(e){
    setGender(e.target.value);
  }

  function handleCheckboxClick(e){
    // setIsChecked(e.target.checked);
    // setIsChecked(checkRef.current.checked);
    let check = e.target.checked;
    setIsChecked(check)
    if(check){
      setSize([...size, e.target.value]);
      //console.log(size)
    }else{
        const newSizes = size.filter(item=> item !== e.target.value)
        setSize(newSizes)
    } 
  }

  //map the categories available
  let categoryNames = [];
  const availableCategories = apparels.forEach(apparel=>{
    categoryNames.push(apparel.category);
    return categoryNames;
  })

  //filter category names to remove duplicates
  const filteredCategories = [...new Set(categoryNames)];
  //console.log(filteredCategories)

  //set dynamic options for the select input of categories
  const optionList = filteredCategories.map(item=>{
      return <option key={item} value={item}>{item}</option>
  })
  return (
    <div className="left-sidebar">
      <h5 className="product-filter">Filter Producst</h5>
      <div className="select-options">
        <label htmlFor="category" className="product-filter">Categories</label><br/>
        <select name="category" id="category" className="product-filter" onChange={handleCategory}>
          <option value={"All"}>All</option>
          {optionList}
        </select>
      </div>
      <div className="price-filter">
        <label htmlFor="customRange1" className="form-label">Filter By Price</label>
        <input type="range" className="form-range" id="customRange1" min="100" max="5000" onChange={handlePriceRange} ></input>
        <span>PRICE: KSHS 100 - KSHS {price}</span>
      </div>
      
      <div className="radio-button" id="gender">
        {/* <label htmlFor="gender" className="form-label">Filter By Gender</label><br/> */}
        <p className="gender-filter">Gender</p>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="all" value="all" onChange={handleRadioSelection}/>
            <label className="form-check-label" htmlFor="all">
                All Gender
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleRadioSelection}/>
            <label className="form-check-label" htmlFor="male">
                Male
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleRadioSelection}/>
            <label className="form-check-label" htmlFor="female">
                Female
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="unisex" value="unisex" onChange={handleRadioSelection}/>
            <label className="form-check-label" htmlFor="unisex">
                Unisex
            </label>
            </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="children" value="children" onChange={handleRadioSelection}/>
            <label className="form-check-label" htmlFor="children">
                Children
            </label>
        </div>
      </div><br/>     
      <div className="size-filter">
        <label htmlFor="size" className="product-filter">Filter By Size</label><br/>
        <div className="checked-input" id="size">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="XL" id="xlarge" onChange={handleCheckboxClick} />
                <label className="form-check-label" htmlFor="xlarge">
                    XL
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="L" id="large" onChange={handleCheckboxClick} />
                <label className="form-check-label" htmlFor="large">
                    L
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="S" id="small" onChange={handleCheckboxClick} />
                <label className="form-check-label" htmlFor="small">
                    S
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="XS" id="xsmall" onChange={handleCheckboxClick} />
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
