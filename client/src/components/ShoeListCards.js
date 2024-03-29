import {Link} from 'react-router-dom'

function ShoeListCards({shoes}) {
    return (

        <div className="collectionlistCards" key={shoes.id}>

            <img src={shoes.image} alt={shoes.title} width= "200px" height= "115px" />
            <div className="Card-txt">
            <h3>{shoes.title}</h3>
            <br></br>
            {/* <p className="text-muted">{shoes.desc}</p> */}
            <p className="text-muted">Likes: {shoes.rating}</p>
            <br></br>
            <h3>${shoes.price}</h3>
            </div>
        </div>

    )
}

export default ShoeListCards;