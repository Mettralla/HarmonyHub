import PropTypes from "prop-types";
import AvatarDefault from "../assets/avatar-default.png";
import { Link } from "react-router-dom";

ArtistListCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

function ArtistListCard({ key, id, image, name }) {
  return (
    <div className="artist-card has-background-dark">
      <figure key={key} className="image is-48x48">
        <img
          src={!image ? AvatarDefault : image}
          alt={name}
          className="artist-image"
        />
      </figure>
      <div className="artist-info">
        <p className="artist-name">{name}</p>
      </div>
      <div className="artist-play">
        <Link to={`/artists/${id}`} className="button is-primary is-small">
          Discografia
        </Link>
      </div>
    </div>
  );
}

export default ArtistListCard;
