import '../styles/Banner.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

Banner.propTypes = {
  imageUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string
};

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
