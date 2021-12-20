import React from "react";
import ShoeCards from "./ShoeCards";


function MainPage({shoeList, setSelectedShoe}) {


    
    return (
        <div class="MainDisplay">
              
              
        {shoeList.map((shoes) => <ShoeCards key={shoes.id} shoe={shoes} setSelectedShoe={setSelectedShoe}/>)}
        </div>
    )
}

export default MainPage;