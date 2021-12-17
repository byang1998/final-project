import React from 'react';
import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './MainPage';
import Navbar from "./Navbar";
import Login from "./Login";


function App() {
    const [shoeList, setShoeList] = useState([])
    const [selectedShoe, setSelectedShoe] = useState([])
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<MainPage shoeList={shoeList} setSelectedShoe={setSelectedShoe}/>} />
    </Routes>
     
    </div>
  );
}

export default App;