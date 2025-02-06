import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import { FaUser, FaBell, FaEdit, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function ProfileScreen() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); 
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        localStorage.removeItem("token"); 
        navigate("/login"); 
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Profile</h1>
        <p className="subtitle">Manage your account & settings</p>
      </header>

      <main className="profile-container">
        <div className="profile-card">
          <FaUser className="profile-icon" />
          {user ? (
            <>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Role: {user.isVendor ? "Vendor" : "Regular User"}</p>
              <button className="edit-btn"><FaEdit /> Edit Profile</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="settings">
          <div className="setting-item">
            <FaCog className="setting-icon" />
            <span>Account Settings</span>
          </div>
          <div className="setting-item">
            <FaBell className="setting-icon" />
            <span>Notification Preferences</span>
          </div>
          <div className="setting-item logout" onClick={handleLogout}>
            <FaSignOutAlt className="setting-icon" />
            <span>Logout</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileScreen;
