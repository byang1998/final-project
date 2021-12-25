import React from "react";
import {Link} from 'react-router-dom'
//import styled from "styled-components";
//import { Button } from 'react-bootstrap';


function Header({ user, setUser, setShoeList, fullShoeList }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }



  return (
    <div className="Header">

      <Link to="/">
        <h2 className="Header-title">Foot Wear</h2>
      </Link>

        <button onClick={handleLogoutClick}>
          Logout
        </button>
    
    </div>
  );
}







export default Header;