import React from "react";
import "./HomeScreen.css";

function App() {
  return (
    <div className="app" id = "root">
      <header className="header">
        <h1>Main Menu</h1>
        <p className="subtitle">DoseWise - Medication Manager</p>
      </header>

      <main className="medicine-container">
        <div className="medicine-card">
          <span className="medicine-name">Paracetamol</span>
          <span className="stock">10 in stock</span>
        </div>
        <div className="medicine-card">
          <span className="medicine-name">Ibuprofen</span>
          <span className="stock low">2 in stock</span>
        </div>
        <div className="medicine-card">
          <span className="medicine-name">Amoxicillin</span>
          <span className="stock out">Out of stock</span>
        </div>
        <div className="medicine-card">
          <span className="medicine-name">Cetirizine</span>
          <span className="stock">15 in stock</span>
        </div>
      </main>
    </div>
  );
}

export default App;