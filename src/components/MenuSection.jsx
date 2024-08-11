import { Link } from "react-router-dom";
import "../styles/MenuSection.css";
import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

MenuSection.propTypes = {
    title: PropTypes.string
}

function MenuSection({title}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p
        className={`menu-label ${
          theme === "light" ? "has-text-dark" : "has-text-white"
        }`}
      >
        {title}
      </p>
      <ul className="menu-list navbar__list">
        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/"
              className={`navbar-item ${
                theme === "light"
                  ? "has-text-dark light-mode"
                  : "has-text-white dark-mode"
              }`}
            >
              <i className="fa fa-home fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Home
            </Link>
          </li>
        </div>

        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/profile"
              className={`navbar-item ${
                theme === "light"
                  ? "has-text-dark light-mode"
                  : "has-text-white dark-mode"
              }`}
            >
              <i className="fa fa-user fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Perfil
            </Link>
          </li>
        </div>

        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/albums"
              className={`navbar-item ${
                theme === "light"
                  ? "has-text-dark light-mode"
                  : "has-text-white dark-mode"
              }`}
            >
              <i className="fa fa-user fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Ver Albums
            </Link>
          </li>
        </div>

        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/artists"
              className={`navbar-item ${
                theme === "light"
                  ? "has-text-dark light-mode"
                  : "has-text-white dark-mode"
              }`}
            >
              <i className="fa fa-user fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Ver Artistas
            </Link>
          </li>
        </div>

        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/songs"
              className={`navbar-item ${
                theme === "light"
                  ? "has-text-dark light-mode"
                  : "has-text-white dark-mode"
              }`}
            >
              <i className="fa fa-user fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Ver Canciones
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default MenuSection;