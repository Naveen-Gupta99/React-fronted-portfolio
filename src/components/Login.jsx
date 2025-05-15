import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './signUp.css';
import { NavLink, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();

  const [formLoginData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

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
        toast.info("Logout then login");
      }, 1500);
      return;
    }

    setLoading(true); // Show spinner

    try {
      const response = await fetch("https://react-backend-api.onrender.com/login", {
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
        console.log("Server response:", data);
        setLoginFormData({ email: "", password: "" });
        setTimeout(() => {
          navigate('/');
        }, 2500);
      } else {
        toast.error("User not found");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Login failed: Network error");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <>
      <div className="container">
        <div id='containerr'>
          <h1>Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <input
              className="input"
              type="email"
              value={formLoginData.email}
              name="email"
              placeholder="Enter your email"
              onChange={handleLoginChange}
              required
            />
            <br />

            <input
              className="input"
              type="password"
              value={formLoginData.password}
              name="password"
              placeholder="Enter your password"
              onChange={handleLoginChange}
              required
            />
            <br />

            <button className='button' type="submit" disabled={loading}>
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Submit"
              )}
            </button>
            <br />
            <span className="redirect">Click for SignUp...</span>
            <NavLink className="login" to="/signUp">Click</NavLink>
          </form>
        </div>
      </div>

      <ToastContainer />

      {/* Spinner Styles */}
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
  );
}

export default App;
