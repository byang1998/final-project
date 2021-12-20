import {useState, useEffect} from 'react'; 

function ShoeDetails({shoe}){


   // const imageUrl = shoe.image2 ? shoe.image2 : shoe.image;
 
    

 function handleLikes(e) {  
   e.preventDefault()
     fetch(`http://localhost:3000/shoes/${shoe.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({rating: ++shoe.rating}),
      })
      .then(res => res.json())
      .then(data => console.log("clicked"))
    }

  function handleShoelist() {
    const shoeId = {
      shoe_id: shoe.id
    }
    fetch('http://localhost:3000/shoetimes', {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(shoeId)
  })
  }


    return(
        <div className="Details">
            <h3>{shoe.title}</h3>
            <img src={shoe.image} style={{width:"700px"}} alt= {shoe.title}/>
            <br></br>
            <h5>{shoe.price}</h5>
            <button className="btn btn-primary Detail-btn" onClick={handleLikes}>Add a Like</button>
            <button className="btn btn-primary Detail-btn" onClick={handleShoelist}>Add to Shoelist</button>
            <p>{shoe.desc}</p>
            
        
        </div>
    )
}
export default ShoeDetails;