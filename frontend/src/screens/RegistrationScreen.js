import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./AuthScreen.css";

function RegisterationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, isVendor }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">DoseWise</h2>
        <p className="login-subtitle">Create your account</p>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="vendorCheck" checked={isVendor} onChange={(e) => setIsVendor(e.target.checked)} />
            <label htmlFor="vendorCheck">Are you a vendor?</label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <div className="signup-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterationScreen;
