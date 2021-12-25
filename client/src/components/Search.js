import { useState} from 'react';
function Search({handleSearch, shoeList, fullShoeList, setShoeList}) {
    const[form, setForm] = useState("")
    const handleForm = (e) => setForm(e.target.value)
    
    
    function setSearchKeyWord(e) {
       e.preventDefault();
       handleSearch(form)
      }
      
      

    return (
        <div className="Search">
            <form onSubmit={setSearchKeyWord}>
          <input
            class="form-control"
            type="text"
            id="search"
            placeholder="Search Shoes"
            onChange = {handleForm}
           
          />
          </form>

        </div>
    )
}
export default Search;


// function Search({shoeList, fullShoeList, setShoeList}) {

//     function setSearchKeyWord(e) {
//        // console.log(title)
       
//        const title = e.target.value
//        console.log(title)
//        // console.log(shoeList)
//         const searchedShoe = shoeList.filter((shoe)=> shoe.title.toLowerCase().includes(title.toLowerCase()))
//         setShoeList(searchedShoe)

       
//       }

//     return (
//         <div className="Search">
//             <form onChange={setSearchKeyWord}>
//           <input
//             class="form-control"
//             type="text"
//             id="search"
//             placeholder="Search Shoes"
           
//           />
//           </form>

//         </div>
//     )
// }
// export default Search;