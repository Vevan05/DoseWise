import React from "react";
import "./ProfileScreen.css";
import { FaUser, FaShoppingCart, FaCapsules, FaCamera, FaBell, FaEdit, FaCog, FaSignOutAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Profile() {
  return (
    <div className="app">
      <header className="header">
        <h1>Profile</h1>
        <p className="subtitle">Manage your account & settings</p>
      </header>

      <main className="profile-container">
        <div className="profile-card">
          <FaUser className="profile-icon" />
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <button className="edit-btn"><FaEdit /> Edit Profile</button>
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
          <div className="setting-item logout">
            <FaSignOutAlt className="setting-icon" />
            <span><Link to = "/login">Logout</Link></span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
