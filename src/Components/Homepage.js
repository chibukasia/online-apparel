import React, { useState } from "react";
import SearchBar from "./SearchBar";
//import '../App.css';
import { Link } from "react-router-dom";
import Collections from "./Collections";
import SideBar from "./SideBar";

function Homepage({apparels, setApparels, cart, setCart}) {
  //const [apparels, setApparels] = useState([]);
  const [search, setSearch] =useState('');
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState(10000);
  const [gender, setGender] = useState('all');
  const [size, setSize] = useState([]);
  // const [inStock, setInStock] = useState(true);

  return (
    <div>
      <h1>This is the home page</h1>
      <div className="main">
        <div className="side-bar">
          <SideBar 
            apparels={apparels} 
            setApparels={setApparels}
            category={category} 
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            gender = {gender}
            setGender={setGender}
            size={size}
            setSize={setSize}
            />
        </div>
        <div className="main-content">
          <div className="search">
            <SearchBar apparels={apparels} 
              setApparels={setApparels} 
              search={search} 
              setSearch={setSearch} 
              />
          </div>
          <Collections 
            apparels={apparels} 
            setApparels={setApparels} 
            search={search}
            category={category}
            price={price}
            gender={gender}
            cart={cart} 
            setCart={setCart}
            // inStock={inStock}
            // setInStock= {setInStock}
            />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
