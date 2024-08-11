import "../styles/WebBody.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import AlbumsPage from "./AlbumsPage.jsx";
import ArtistsPage from "./ArtistsPage.jsx";
import SongsPage from "./SongsPage.jsx";
import ShowAlbum from "./ShowAlbum.jsx";
import ShowArtistSongs from "./ShowArtistSongs.jsx";

function WebBody() { 
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/albums/:id" element={<ShowAlbum />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/artists/:id" element={<ShowArtistSongs />} />
        <Route path="/songs" element={<SongsPage />} />
      </Routes>
    </div>
  );
}

export default WebBody;
