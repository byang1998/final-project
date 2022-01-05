import { useState } from "react";
//import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
//import { Button } from 'react-bootstrap';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
        
      <h1>Foot Wear</h1>
      <img id="footwearLogo" src="https://s.tmimgcdn.com/scr/800x500/188800/footwear-logo-concept-for-man-shoes_188880-original.jpg" alt="logo" width = "330" height = "250"/>
      {showLogin ? 
        <>
          <LoginForm onLogin={onLogin} />
         
          <p>
            Don't have an account? &nbsp;
            <button className="signupbutton" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
       : 
        <>
          <SignUpForm onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <button className="loginbutton" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      }
    </div>
  );
}



export default Login;

