import "../styles/WebBody.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import AlbumsPage from "./AlbumsPage.jsx";
import ArtistsPage from "./ArtistsPage.jsx";

function WebBody() { 
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/songs" element={<ArtistsPage />} />
      </Routes>
    </div>
  )
}

export default WebBody;
