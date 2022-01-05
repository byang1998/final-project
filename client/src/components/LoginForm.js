import React, { useState } from "react";
import {  Error, Input, FormField, Label } from "../styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))
        .then(()=>window.location.reload())
      } else {
        //r.json().then((err) => console.log(err));
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      
    <form onSubmit={handleSubmit}>
        <div className="loginfield">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="loginfield">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         </div>

      

        <button className="loginbutton" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>


        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}

      
    </form>
    </div>
  );
}

export default LoginForm;