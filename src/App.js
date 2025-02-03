import OpeningScreen from './screens/OpeningScreen';
import HomeScreen from './screens/HomeScreen';
import ScanningScreen from './screens/ScanningScreen';
import OrderScreen from './screens/OrderScreen';
import AlertsScreen from './screens/AlertsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterationScreen from './screens/RegistrationScreen';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { FaUser, FaShoppingCart, FaCapsules, FaCamera, FaBell } from "react-icons/fa";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<OpeningScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterationScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/scanning" element={<ScanningScreen />} />
          <Route path="/alerts" element={<AlertsScreen />} />
        </Routes>
      </div>
      <Navigation />

    </Router>
  );
};

const Navigation = () => {
  const location = useLocation(); 

  const showNav = !["/login", "/register", "/"].includes(location.pathname);

  return (
    <>
      {showNav && (
        <nav className="bottom-nav">
          <Link to="/profile">
            <button className="nav-btn"><FaUser /><span>Profile</span></button>
          </Link>
          <Link to="/orders">
            <button className="nav-btn"><FaShoppingCart /><span>Orders</span></button>
          </Link>
          <Link to="/home">
            <button className="nav-btn"><FaCapsules /><span>Medicines</span></button>
          </Link>
          <Link to="/scanning">
            <button className="nav-btn"><FaCamera /><span>Scanner</span></button>
          </Link>
          <Link to="/alerts">
            <button className="nav-btn active"><FaBell /><span>Alerts</span></button>
          </Link>
        </nav>
      )}
    </>
  );
};

export default App;
