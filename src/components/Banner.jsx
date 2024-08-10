import '../styles/Banner.css';
import PropTypes from "prop-types";

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
        <a href={buttonLink} className="button is-primary is-light banner-button">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export default Banner;
