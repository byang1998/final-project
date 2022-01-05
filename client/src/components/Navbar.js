import React from "react";

import Search from "./Search";
import {Link} from "react-router-dom";

// function NavBar({setSearchShoe}) {

function NavBar({handleSearch, shoeList, fullShoeList, setShoeList}) {
  

    return (
        <div class="NavBar">
           <div className="Navlinks">
        <Link  to="/shoelist">
        <h3 className="Nav-item">Shoelist</h3>
        </Link>
        <Link to="/shoes/new">
        <h3 className="Nav-item">New Shoe</h3>
        </Link>
        <Link to="/map">
        <h3 className="Nav-item">Map</h3>
        </Link>
        </div>
        {/* <Search setSearchShoe={setSearchShoe} /> */}
        <Search handleSearch={handleSearch} shoeList={shoeList} fullShoeList={fullShoeList} setShoeList={setShoeList}/>
        
       
        </div>
    )
}



export default NavBar;