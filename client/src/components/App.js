import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";
import MainPage from './MainPage';
import Header from "./Header";
import ShoeDetails from "./ShoeDetails";
import Login from "./Login";
import AddShoe from "./AddShoe";
import ShoeList from "./ShoeList";
import NoShoelist from "./NoShoelist";
import Map from "./Map";

function App() {
    const [shoeList, setShoeList] = useState([])
    const [selectedShoe, setSelectedShoe] = useState([])
       const [user, setUser] = useState(null);
       const [loggedIn, setLoggedIn] = useState(true)
       const [searchShoe, setSearchShoe] = useState("")
       const [fullShoeList, setFullShoeList] = useState([])
       const [collectionlist, setCollectionlist] = useState([])

   
    // const handleSearch = (userinput) => setSearchShoe(userinput)
    
    // const searchResults = () => {
    //     if (searchShoe.length > 0 ) {
    //         return shoeList.filter((shoe)=> shoe.title.toLowerCase().includes(searchShoe.toLowerCase()))
    //     } else {return shoeList}
        
    // }

    function handleSearch(userinput) {
        if (userinput.length > 0) {
            const newShoeList = shoeList.filter((shoe)=> shoe.title.toLowerCase().includes(userinput.toLowerCase()))
            setShoeList(newShoeList)
        }
        else {
            setShoeList(fullShoeList)
        }

    }


    //    const filteredShoes = shoes.filter((shoeObj) => shoeObj.title.includes(searchShoe))

    //    useEffect(() => {
    //     fetch("/shoes")
    //     .then(res => res.json())
    //     .then(data => {
    //       setShoeList(data)
    //       setFullShoeList(data)
    //     })
    //   }, []);

    const addNewShoe = (newShoeObj) => {
        setShoeList((prevArray) => [...prevArray, newShoeObj])
      }

   useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/shoes").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
            setFullShoeList(data)
            setShoeList(data)});
      }
    });
  }, []);

  useEffect(() => {
    fetch("/shoetimes")
    .then(res => res.json())
    .then(data => {
      setCollectionlist(data)
    })
  }, []) 
  

  if (!user) return (
    <div className="App">
        <Login onLogin={setUser}/>
       
    </div>
  );

 

  return (
    
    <div className="App">
       
      
      <Header user={user} setUser={setUser} setShoeList={setShoeList} setShoeList={setShoeList} fullShoeList={fullShoeList} />
     
      <NavBar shoeList={shoeList} fullShoeList={fullShoeList} setShoeList={setShoeList} handleSearch={handleSearch} />  
      <Routes>
        <Route path="/shoes" element={selectedShoe ? <ShoeDetails user={user}  setCollectionlist={setCollectionlist} shoe={selectedShoe}/> : null} />
        <Route path="/" element={<MainPage shoeList={shoeList} setSelectedShoe={setSelectedShoe}/>} />
        <Route path="/shoes/new" element={<AddShoe addNewShoe={addNewShoe} />} />
        <Route path="/shoelist" element= {loggedIn === true ? <ShoeList /> : <NoShoelist />}/>
        <Route path="/map" element= {loggedIn === true ? <Map/>  : null}/>
      </Routes> 
     
    </div>
  );
}

export default App;

