import React from "react";

function SearchBar ({setSearch}){

    // function to get and update the value of the search field
    function handleSearch (e){
        setSearch(e.target.value);
    }

    return (
        <div>
            <form className='search-bar'>
                <input type='text' name='serach' placeholder="Search Product" onChange={handleSearch}/>
            </form>
        </div>
    )
}

export default SearchBar;