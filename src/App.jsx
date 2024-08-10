import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Body from "./components/WebBody.jsx";
import ThemeContext from "./context/ThemeContext.jsx";
import PlayContext from "./context/PlayContext.jsx";
import useTheme from "./hooks/useTheme.jsx";
import usePlay from "./hooks/usePlay.jsx";

function App() {
  const [theme, toggleTheme] = useTheme();
  const [play, togglePlay, id, setTrackId, title, setTrackTitle,
    songFile, setTrackSongFile, year, setTrackYear, cover,
    setTrackCover] = usePlay();

  return (
    <Router>
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
            <Body />
          </div>
        </PlayContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App
