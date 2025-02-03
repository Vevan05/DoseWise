import React, { useState } from "react";
import "./RegistrationScreen.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import {Link} from 'react-router-dom';

function RegisterationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
                                              
  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert("Registration successful! (Implement backend logic here)");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">DoseWise</h2>
        <p className="login-subtitle">Create your account</p>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <FaUser className="icon" />
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn"><Link to = "/home">Sign Up</Link></button>
        </form>

        <div className="signup-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterationScreen;