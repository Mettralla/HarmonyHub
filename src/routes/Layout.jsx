import { Outlet } from "react-router-dom";
import "../styles/WebBody.css";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
// import Body from "../components/WebBody.jsx";
import ThemeContext from "../context/ThemeContext.jsx";
import PlayContext from "../context/PlayContext.jsx";
import useTheme from "../hooks/useTheme.jsx";
import usePlay from "../hooks/usePlay.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";

function Layout() {
  const [theme, toggleTheme] = useTheme();
  const [
    play,
    togglePlay,
    id,
    setTrackId,
    title,
    setTrackTitle,
    songFile,
    setTrackSongFile,
    year,
    setTrackYear,
    cover,
    setTrackCover,
  ] = usePlay();

  return (
      <AuthProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <PlayContext.Provider
            value={{
              play,
              togglePlay,
              id,
              setTrackId,
              title,
              setTrackTitle,
              songFile,
              setTrackSongFile,
              year,
              setTrackYear,
              cover,
              setTrackCover,
            }}
          >
            <div className="app">
              <Navbar />
              <SearchBar />
              <div className="body-container">
                <Outlet />
              </div>
            </div>
          </PlayContext.Provider>
        </ThemeContext.Provider>
      </AuthProvider>
  );
}

export default Layout;
