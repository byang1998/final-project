import ShoeListCards from "./ShoeListCards"
import {useEffect, useState} from 'react';

function ShoeList() {
    const [collectionlist, setCollectionlist] = useState([])

    useEffect(() => {
        fetch("/shoetimes")
        .then(res => res.json())
        .then(data => {
          setCollectionlist(data)
        })
      }, []) 


      return (
   
        <div className="collectionlist">
            <h3>My Collectionlist</h3>
          {
              collectionlist.map((collectionlist) => <ShoeListCards key={collectionlist.id} shoes={collectionlist.shoe} />)
          }

            
        </div>
    )
}

export default ShoeList;