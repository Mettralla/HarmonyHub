import "../styles/ArtistCard.css";
import PropTypes from "prop-types";

ArtistCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

function ArtistCard({ image, name }) {
  return (
    <div className="artist-card has-background-dark">
      <figure className=" image is-48x48">
        <img className="artist-image" src={image} alt={name} />
      </figure>
      <div className="artist-info">
        <p className="artist-name">{name}</p>
      </div>
      <div className="song-play">
        <button className="button is-primary is-small">Discografia</button>
      </div>
    </div>
  );
}

export default ArtistCard;
