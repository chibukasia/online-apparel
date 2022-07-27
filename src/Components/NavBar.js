import React from "react";
import {Link} from "react-router-dom"
function NavBar(){

    return (
        <div className="topnav">
            <Link to="/" className="link">Home</Link>
            <Link to="/cartpage" className="link">Cart</Link>
            <Link to="/additem" className="link">Add Item To Shop</Link>
        </div>
    )
}

export default NavBar;