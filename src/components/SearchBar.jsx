import "../styles/SearchBar.css";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Componente que muestra una barra de búsqueda con funcionalidades para cambiar el tema y gestionar la autenticación del usuario.
 * 
 * Incluye:
 * - Un botón para alternar entre los temas claro y oscuro.
 * - Un botón para cerrar sesión si el usuario está autenticado.
 * - Un enlace para acceder a la página de inicio de sesión si el usuario no está autenticado.
 * 
 * Utiliza el contexto de `ThemeContext` para obtener y cambiar el tema de la aplicación.
 * Utiliza el contexto de `AuthContext` para gestionar la autenticación del usuario.
 * 
 * @component
 * @returns {JSX.Element}
 */
function SearchBar() { 
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout } = useAuth("actions");
  const { isAuthenticated } = useAuth("state");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

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

        {isAuthenticated ? (
          <button className="button ml-2" onClick={handleLogout}>
            <i className="fa fa-sign-out-alt fa-1x" aria-hidden="true"></i>
          </button>
        ) : (
          <Link to="/login" className="button ml-2">
            <i
              className={
                theme === "light" ? "fa fa-user fa-1x" : "fa fa-user fa-1x"
              }
              aria-hidden="true"
            ></i>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default SearchBar;
