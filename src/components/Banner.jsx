import '../styles/Banner.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

Banner.propTypes = {
  imageUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string
};

/**
 * Componente de banner que muestra una imagen, un texto y un botón.
 * El botón redirige al enlace especificado.
 *
 * @component
 * @param {string} imageUrl - La URL de la imagen que se mostrará en el banner.
 * @param {string} buttonLabel - El texto que se mostrará en el botón.
 * @param {string} buttonLink - La ruta a la que se redirigirá al hacer clic en el botón.
 * @returns {JSX.Element} Un banner con una imagen y un botón.
 */
function Banner({ imageUrl, buttonLabel, buttonLink }) {
  return (
    <section className="banner hero is-medium">
      <img src={imageUrl} alt="Banner" className="banner-image" />
      <div className="banner-button-container">
        <Link to={buttonLink} className="button is-primary has-text-dark banner-button">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default Banner;
