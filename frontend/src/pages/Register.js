import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        try {
          const res = await axios.post("/account/user/register/", {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            
          });
          setFirstName("")
          setLastName("")
          setEmail("")
          setPassword("")
          setConfirmPassword("")
        } catch (error) {
          console.log(error, "register failed")
        }
      }
    } catch (error) {
      console.log(error, "handle submit failed")
    }
  };
  return (
    <div className="register">
      <form className="register-form">
        <h1>Sign Up</h1>
        <input
          className="full-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          className="full-name"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          className="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="pwd"
          placeholder="Enter a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <input
          className="cfm-pwd"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        ></input>
        <button onClick={handleSubmit} type="submit">Submit</button>
        <hr></hr>
        <p className="reg-comment">Do you already have an account?</p>
        <Link className="reg-link login-link" to="/login">
          <p className="reg-link login-link">Login</p>
        </Link>
      </form>
    </div>
  );
}

export default Register;
