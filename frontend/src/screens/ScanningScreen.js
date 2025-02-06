import React from "react";
import "./ScanningScreen.css";
import { FaUser, FaShoppingCart, FaCapsules, FaCamera, FaBell, FaUpload, FaImage } from "react-icons/fa";

function Scanner() {
  return (
    <div className="app">
      <header className="header">
        <h1>Prescription Scanner</h1>
        <p className="subtitle">Scan your prescription to add medicines</p>
      </header>

      <main className="scanner-container">
        <div className="scan-box">
          <FaCamera className="scan-icon" />
          <p className="scan-text">Place your prescription here</p>
        </div>
        <button className="scan-button">Scan Prescription</button>

        <div className="extra-options">
          <button className="option-btn">
            <FaUpload /> Upload Image
          </button>
          <button className="option-btn">
            <FaImage /> View Past Scans
          </button>
        </div>
      </main>

    </div>
  );
}

export default Scanner;