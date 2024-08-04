import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Body from "./components/WebBody.jsx";
import ThemeContext from "./context/ThemeContext.jsx";
import useTheme from "./hooks/useTheme.jsx";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Navbar />
        <SearchBar />
        <Body />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App
