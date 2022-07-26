import React from "react";

function SearchBar (){
    return (
        <div>
            <form className='search-bar'>
                <input type='text' name='serach' placeholder="Search Product"/>
            </form>
        </div>
    )
}

export default SearchBar;