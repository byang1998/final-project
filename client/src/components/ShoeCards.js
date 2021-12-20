import React from "react";
import {Link} from "react-router-dom";

function ShoeCards({shoe, setSelectedShoe}) {
    
    return (
        <Link to="/shoes">
        <div className="Shoebox" onClick={() => setSelectedShoe(shoe)}>
            <img src={shoe.image} alt={shoe.title} width= "200px" height= "115px" />  
            <div className="Card-txt">   
            <h3>{shoe.title}</h3>
            <p className="text-muted">{shoe.desc}</p> 
            <p className="text-muted">Likes: {shoe.rating}</p>  
            </div>
        </div>
        </Link>
    )
}

export default ShoeCards;