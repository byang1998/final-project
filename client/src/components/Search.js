function Search({shoeList, fullShoeList, setShoeList}) {

    function setSearchKeyWord(e) {
       // console.log(title)
       
       const title = e.target.value
       
        console.log(shoeList)
        const searchedShoe = shoeList.filter((shoe)=> shoe.title.toLowerCase().includes(title.toLowerCase()))
        setShoeList(searchedShoe)
       
      }

    return (
        <div className="Search">
            <form onChange={setSearchKeyWord}>
          <input
            class="form-control"
            type="text"
            id="search"
            placeholder="Search Shoes"
           
          />
          </form>

        </div>
    )
}
export default Search;