
import React, { useState } from "react";
import {  Error, Input, Label } from "../styles";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        email,
       
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        //r.json().then((err) => console.log(err.errors));
       r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="signupfield">
        {/* <label htmlFor="username">Username</label> */}
        <input
          className="signupcriteria"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
     
      
        {/* <label htmlFor="password">Password</label> */}
        <input
          className="signupcriteria"
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
   
        {/* <label htmlFor="password">Password Confirmation</label> */}
        <input
        className="signupcriteria"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
  
        {/* <label htmlFor="email">Email</label> */}
        <input
        className="signupcriteria"
          type="text"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
   
      

        <button className="signupbutton1" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
   </div>
    </form>
    </div>
  );
  
}

export default SignUpForm;