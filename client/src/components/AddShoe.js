import { useState } from "react"

function AddShoe({addNewShoe}) {

    const [title, setTitle] =useState ("")
    const [image, setImage] =useState ("")
    const [desc, setDesc] =useState("")
    const [rating, setRating] =useState(0)
    const [price, setPrice] =useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
    const newShoe = {
        title : title,
        image :  image,
        desc :  desc,
        rating :  rating,
        price :  price,
    }

    fetch('/shoes', {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newShoe)
    })
        .then(res =>res.json())
        .then(newShoe => {
            addNewShoe(newShoe)
            setTitle("")
            setImage("")
            setDesc("")
            setRating(0)
            setPrice(0)
        })
    }

    return (
        <div className="AddShoe">
            <h1>Want To Add A New Shoe?</h1>
         <form className="col-auto" onSubmit={handleSubmit}>
             <div className="col-auto">
            <input className="col-sm-4 col-form-label" value= {title} onChange={(e) => setTitle(e.target.value)}type="text" name="title" placeholder="Shoe Title" />
            </div>
            <div className="col-auto AddShoe-input">
            <input className="col-sm-4 col-form-label" value= {image} onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
            </div>
            <div className="col-auto AddShoe-input">
            <input className="col-sm-4 col-form-label" value= {desc} onChange={(e) => setDesc(e.target.value)} type="text" name="description" placeholder="Shoe Description" />
            </div>
            <div className="col-auto AddShoe-input">
            <input className="col-sm-4 col-form-label" value= {rating} onChange={(e) => setRating(e.target.value)} type="text" name="rating" placeholder="Rating" />
            </div>
            <div className="col-auto AddShoe-input">
            <input className="col-sm-4 col-form-label" value= {price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="price" />
            </div>
            <div className="AddShoe-btn">
            <button className="btn btn-primary" type="submit">Submit Shoe</button>
            </div>
        </form>

        </div>
    )
}

export default AddShoe;