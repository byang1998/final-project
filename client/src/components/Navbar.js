import React from "react";

import Search from "./Search";
import {Link} from "react-router-dom";

// function NavBar({setSearchShoe}) {

function NavBar({handleSearch, shoeList, fullShoeList, setShoeList}) {
  

    return (
        <div class="NavBar">
        <Link to="/shoelist">
        <h3 className="Nav-item">Shoelist</h3>
        </Link>
        <Link to="/shoes/new">
        <h3 className="Nav-item">New Shoe</h3>
        </Link>
        {/* <Search setSearchShoe={setSearchShoe} /> */}
        <Search handleSearch={handleSearch} shoeList={shoeList} fullShoeList={fullShoeList} setShoeList={setShoeList}/>

        <Link to="/map">
        <h3 className="Nav-item">Map</h3>
        </Link>
        </div>
    )
}



export default NavBar;