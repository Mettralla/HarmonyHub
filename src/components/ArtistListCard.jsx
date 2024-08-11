import PropTypes from "prop-types";
import AvatarDefault from "../assets/avatar-default.png";

ArtistListCard.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
};

function ArtistListCard({ key, image, name }) {
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
        <button className="button is-primary is-small">Play</button>
      </div>
    </div>
  );
}

export default ArtistListCard;
