import React from "react";

//import styled from "styled-components";
//import { Button } from 'react-bootstrap';


function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
 
        <button onClick={handleLogoutClick}>
          Logout
        </button>
    
    </div>
  );
}







export default Navbar;