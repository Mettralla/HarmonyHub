import "../styles/SearchBar.css";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function SearchBar() { 
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar is-transparent search-bar">
      <div className="navbar-end">
        <button className="button" onClick={toggleTheme}>
          <i
            className={
              theme === "light" ? "fa fa-moon fa-1x" : "fa fa-sun fa-1x"
            }
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </nav>
  );
}

export default SearchBar;
