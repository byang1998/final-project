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
      <img id="footwearLogo" src="https://s.tmimgcdn.com/scr/800x500/188800/footwear-logo-concept-for-man-shoes_188880-original.jpg" alt="logo" width = "300" height = "120"/>
      </Link>
      <span>
      
      <h1 className="Header-title">Foot Wear</h1>
      </span>
        <button class="buttonsimple" onClick={handleLogoutClick}>
          Logout
        </button>
    
    </div>
  );
}







export default Header;