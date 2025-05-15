import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './login.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

    setLoading(true); 

    try {
      const response = await fetch("https://react-backend-api.onrender.com/signup", {
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
   finally {
    setLoading(false); // Hide spinner
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

            <button className='button' type="submit" disabled={loading}>
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Submit"
              )}
            </button><br></br>
            <span className="redirect">Click for login...</span>
            <NavLink className="login" to="/Login">Click</NavLink>
          </form>
        </div>
      </div>

      <ToastContainer />

      <style>{`
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

    </>
  )
}

export default App

