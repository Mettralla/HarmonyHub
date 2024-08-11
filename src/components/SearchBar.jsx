import "../styles/SearchBar.css";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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

        <Link to={"/login"} className="button ml-2">
          <i
            className={
              theme === "light" ? "fa fa-user fa-1x" : "fa fa-user fa-1x"
            }
            aria-hidden="true"
          ></i>
        </Link>
      </div>
    </nav>
  );
}

export default SearchBar;
