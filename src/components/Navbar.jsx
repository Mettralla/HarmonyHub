import "../styles/Navbar.css";
import MenuSection from "./MenuSection";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import LogoDark from "../assets/hhLogoLight.svg";
import LogoLight from "../assets/hhLogoDark.svg";

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
