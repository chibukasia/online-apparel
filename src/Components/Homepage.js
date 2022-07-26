import React, { useState } from "react";
import SearchBar from "./SearchBar";
//import '../App.css';
import { Link } from "react-router-dom";
import Collections from "./Collections";
import SideBar from "./SideBar";

function Homepage() {
  const [apparels, setApparels] = useState([]);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/additem">Add Item To Shop</Link>
        </nav>
      </div>
      <h1>This is the home page</h1>
      <div className="main">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="main-content">
          <div className="search">
            <SearchBar />
          </div>
          <Collections apparels={apparels} setApparels={setApparels} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
