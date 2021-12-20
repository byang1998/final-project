import React from "react";

import Search from "./Search";
import {Link} from "react-router-dom";

function NavBar({setSearchShoe}) {

// function NavBar({setShoeList, fullShoeList}) {
  

    return (
        <div class="NavBar">
        <Link to="/shoelist">
        <h3 className="Nav-item">Shoelist</h3>
        </Link>
        <Link to="/shoes/new">
        <h3 className="Nav-item">New Shoe</h3>
        </Link>
        <Search setSearchShoe={setSearchShoe} />
        {/* <Search setShoeList={setShoeList} fullShoeList={fullShoeList}/> */}
        </div>
    )
}

export default NavBar;