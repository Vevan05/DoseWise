import React from "react";
import "./OrderScreen.css";
import { FaUser, FaShoppingCart, FaCapsules, FaCamera, FaBell, FaClipboardList } from "react-icons/fa";

function OrderScreen() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>My Orders</h1>
        <p className="subtitle">Track your recent and past orders</p>
      </header>

      {/* Orders List */}
      <main className="orders-container">
        <div className="order-card">
          <FaClipboardList className="order-icon" />
          <div className="order-details">
            <h3>Order #12345</h3>
            <p>Status: <span className="pending">Pending</span></p>
            <p>Estimated Delivery: Feb 5, 2025</p>
          </div>
        </div>

        <div className="order-card">
          <FaClipboardList className="order-icon" />
          <div className="order-details">
            <h3>Order #12344</h3>
            <p>Status: <span className="shipped">Shipped</span></p>
            <p>Estimated Delivery: Feb 3, 2025</p>
          </div>
        </div>

        <div className="order-card">
          <FaClipboardList className="order-icon" />
          <div className="order-details">
            <h3>Order #12343</h3>
            <p>Status: <span className="delivered">Delivered</span></p>
            <p>Delivered on: Jan 30, 2025</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrderScreen;