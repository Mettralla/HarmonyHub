import "../styles/Navbar.css";
import MenuSection from "./MenuSection";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import LogoDark from "../assets/hhLogoLight.svg";
import LogoLight from "../assets/hhLogoDark.svg";

/**
 * Componente que muestra la barra de navegación de la aplicación.
 * La apariencia del componente cambia en función del tema actual (claro u oscuro).
 * Incluye el logo de la aplicación y una sección de menú de navegación.
 * 
 * Utiliza el contexto de `ThemeContext` para determinar el tema actual y ajustar el diseño en consecuencia.
 * 
 * @component
 * @returns {JSX.Element}
 */
function Navbar() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`navbar-container ${
      theme === "light"
        ? "has-background-white"
        : "has-background-dark"
    }`}>
      <aside className="menu">
        <div className="navbar-logo">
          <img src={theme === "light" ? LogoDark : LogoLight} alt="Logo" />
        </div>
        <MenuSection title="Navegacion"/>
      </aside>
    </div>
  );
}

export default Navbar;
