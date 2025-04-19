import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './signUp.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
const  navigate = useNavigate()

const [formLoginData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
 
    const existingToken = localStorage.getItem("Token");
    if (existingToken) {
      toast.info("User already logged in");
      setTimeout(() => {
        toast.info("logout then login ")
      }, 1500);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formLoginData),
      });
      const data = await response.json();

      if (data.token) {
        localStorage.setItem("Token", data.token);
        toast.success("Login successful");
        console.log("Server response:",data);
        setLoginFormData({ name: "", email: "", password: "" });
        setTimeout(() => {
          navigate('/');
        }, 2500);
      }
       else {
        toast.error("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Signup failed: Network error");
    }
  
  };
  

  return (
    <>
      <div className="container">
      <div id='containerr'>
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>

          <input className="input" type="email" value={formLoginData.email} name="email" placeholder="Enter your email" onChange={handleLoginChange} required></input>
          <br></br>

          <input className="input" type="password" value={formLoginData.password} name="password" placeholder="Enter your password" onChange={handleLoginChange} required></input>
          <br></br>

         <button className='button' type="submit">submit</button><br></br>
         <span className="redirect">Click for SignUp...</span>
         <NavLink className="login" to="/signUp">Click</NavLink>
        </form>
      </div>
      </div>



<ToastContainer />
    </>
  )
}

export default App

