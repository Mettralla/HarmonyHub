import "../styles/WebBody.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import AlbumsPage from "./AlbumsPage.jsx";

function WebBody() { 
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/albums" element={<AlbumsPage />} />
      </Routes>
    </div>
  )
}

export default WebBody;
