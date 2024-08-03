import "../styles/WebBody.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";

function WebBody() { 
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Más rutas */}
      </Routes>
    </div>
  )
}

export default WebBody;
