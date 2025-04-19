import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './login.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const { register, handleSubmit, formState: { errors } } = useForm(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 4) {
      toast.info("Password must be at least 4 characters");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("Token", data.token);
        toast.success("Signup successful!");
        console.log("Server response:", data);
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => {
          navigate('/');
        }, 2500);
      }
      else {
        toast.info("user already exist");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Signup failed: Network error");
    }
  };

  return (
    <>
      <div className="container">
        <div id='container'>
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>

            <input type="text" value={formData.name} name="name" placeholder="Enter your name" required onChange={handleChange}></input>
            <br></br>

            <input type="email" value={formData.email} name="email" placeholder="Enter your email" required onChange={handleChange}></input>
            <br></br>

            <input type="password" value={formData.password} name="password" placeholder="Enter your password" required onChange={handleChange}></input>
            <br></br>

            <button className='button' type="submit">submit</button><br></br>
            <span className="redirect">Click for login...</span>
            <NavLink className="login" to="/Login">Click</NavLink>
          </form>
        </div>
      </div>

      <ToastContainer />

    </>
  )
}

export default App

