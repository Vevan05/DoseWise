import React from "react";
import "./AlertsScreen.css";
import { FaUser, FaShoppingCart, FaCapsules, FaCamera, FaBell, FaExclamationTriangle } from "react-icons/fa";

function AlertsScreen() {
  return (
    <div className="app">
      <header className="header">
        <h1>Alerts & Notifications</h1>
        <p className="subtitle">Stay updated with important reminders</p>
      </header>

      <main className="alerts-container">
        <div className="alert-card urgent">
          <FaExclamationTriangle className="alert-icon" />
          <div className="alert-details">
            <h3>Low Stock Alert</h3>
            <p>Paracetamol is running low. Only 5 left in stock.</p>
            <p className="alert-time">5 mins ago</p>
          </div>
        </div>

        <div className="alert-card reminder">
          <FaBell className="alert-icon" />
          <div className="alert-details">
            <h3>Medication Reminder</h3>
            <p>Take Aspirin at 8:00 PM.</p>
            <p className="alert-time">30 mins ago</p>
          </div>
        </div>

        <div className="alert-card general">
          <FaBell className="alert-icon" />
          <div className="alert-details">
            <h3>New Prescription Added</h3>
            <p>Your prescription for Ibuprofen has been updated.</p>
            <p className="alert-time">2 hours ago</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AlertsScreen;