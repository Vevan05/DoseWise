import React, {useEffect} from "react";
import "./OpeningScreen.css";

import { useNavigate } from "react-router-dom";

const OpeningScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="capsule">
        <div className="top-half"> <span style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>+</span> </div>
        <div className="bottom-half"> <span style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>✔</span> </div>
        <div className="capsule-border"></div>
      </div>
      <h1 className="title">DOSEWISE</h1>
      <p className="subtitle">A MEDICINE TRACKING APP</p>
    </div>
  );
};

export default OpeningScreen;