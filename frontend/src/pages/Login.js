import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/account/token/", {
        username: username,
        password: password,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      }
      setUsername("");
      setPassword("");

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="login">
      <div className="login-background">
        <div className="login-form-wrapper">
          <button onClick={handleClick}
            className="logo-btn" 
          ></button>
          <h1 className="welcome-title">Welcome back!</h1>
          <input
            className="login-id"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <input
            type="password"
            className="login-pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button className="login-btn" onClick={handleSubmit} type="submit" >
            Namaste
          </button>
          <hr className="separate-line"></hr>
          <p className="reg-comment">Don't have an account?</p>
          <Link className="reg-link" to="/register">
            <p className="reg-link">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
