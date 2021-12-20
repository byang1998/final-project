import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from "./NavBar";
import MainPage from './MainPage';
import Header from "./Header";
import ShoeDetails from "./ShoeDetails";
import Login from "./Login";


function App() {
    const [shoeList, setShoeList] = useState([])
    const [selectedShoe, setSelectedShoe] = useState([])
       const [user, setUser] = useState(null);
       const [searchShoe, setSearchShoe] = useState("")
       //const [fullShoeList, setFullShoeList] = useState([])
       const [shoes, setShoes] = useState([]);

       const filteredShoes = shoes.filter((shoeObj) => shoeObj.title.includes(searchShoe))

    //    useEffect(() => {
    //     fetch("/shoes")
    //     .then(res => res.json())
    //     .then(data => {
    //       setShoeList(data)
    //       setFullShoeList(data)
    //     })
    //   }, []);


  useEffect (() => {
    fetch("/shoes")
    .then((response) => response.json())
    .then((shoes) => setShoes(shoes));
  },[]);

  const addNewShoe = (newShoeObj) => {
    setShoes((prevShoe) => [newShoeObj,...prevShoe])
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
        r.json().then((data) => setShoeList(data));
      }
    });
  }, []);

  

  if (!user) return (
    <div className="App">
        <Login onLogin={setUser}/>
       
    </div>
  );

 

  return (
    
    <div className="App">
       
      <Header user={user} setUser={setUser} setShoeList={setShoeList} />
     <NavBar addNewShoe={addNewShoe} setSearchShoe={setSearchShoe}/>
      {/* <NavBar setShoeList={setShoeList} fullGameList={fullShoeList}/>   */}
      <Routes>
      <Route path="/shoes" element={selectedShoe ? <ShoeDetails shoe={selectedShoe}/> : null} />
        <Route path="/" element={<MainPage shoeList={shoeList} setSelectedShoe={setSelectedShoe}/>} />
   
      </Routes> 
     
    </div>
  );
}

export default App;

