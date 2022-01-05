import React from "react";
import {Link} from "react-router-dom";

function ShoeCards({shoe, setSelectedShoe}) {
    
    return (
  
        <div className="Shoebox" onClick={() => setSelectedShoe(shoe)}>
            <img src={shoe.image} alt={shoe.title} width= "200px" height= "115px" />  

            <div className="Card-txt">  
            <Link to="/shoes"> 
            <h3>{shoe.title}</h3>
            </Link>
            {/* <p className="text-muted">{shoe.desc}</p>  */}
           <br></br>
            <p className="text-muted">Likes: {shoe.rating}</p> 
            <br></br>
            <h3>${shoe.price}</h3>  
            </div>
        </div>
      
    )
}

export default ShoeCards;