import "../styles/ArtistCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ArtistCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
};

function ArtistCard({ id, image, name }) {
  return (
    <div className="artist-card has-background-dark">
      <figure className=" image is-48x48">
        <img className="artist-image" src={image} alt={name} />
      </figure>
      <div className="artist-info">
        <p className="artist-name">{name}</p>
      </div>
      <div className="song-play">
        <Link to={`/artists/${id}`} className="button is-primary is-small">
          Discografia
        </Link>
      </div>
    </div>
  );
}

export default ArtistCard;
