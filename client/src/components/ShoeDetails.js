import {useState, useEffect} from 'react'; 

function ShoeDetails({user, shoe, setCollectionlist}){


   // const imageUrl = shoe.image2 ? shoe.image2 : shoe.image;
 
    
   
 function handleLikes(e) {  
   e.preventDefault()
     fetch(`/shoes/${shoe.id}`, {
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
      shoe_id: shoe.id,
      user_id: user.id
    }
    fetch("/shoetimes", {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(shoeId)
    })
    .then(res => res.json())
    .then(data => setCollectionlist (prev => [data, ...prev]));
  }

  


    return(
        <div className="Details">
            <h3>{shoe.title}</h3>
            <img src={shoe.image} style={{width:"700px"}} alt= {shoe.title}/>
            <br></br>
            <h1>${shoe.price}</h1>
            <button className="likebtn" onClick={handleLikes}>Add a Like</button>
            <button className="addbtn" onClick={handleShoelist}>Add to Shoelist</button>
            <p>{shoe.desc}</p>
            
        
        </div>
    )
}
export default ShoeDetails;