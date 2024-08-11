import "../styles//AlbumCard.css"; 
import PropTypes from "prop-types";
import CoverDefault from "../assets/cover-default.png";
import { Link } from "react-router-dom";
import ArtistName from "./ArtistName";

AlbumCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
};

function AlbumCard({ key, id, cover, title, year }) {
  return (
    <div className="album-card has-background-dark">
      <figure key={key} className="image is-48x48">
        <img
          src={!cover ? CoverDefault : cover}
          alt={title}
          className="album-cover"
        />
      </figure>
      <div className="album-info">
        <p className="album-title">{title}</p>
        <p className="album-year">
          {<ArtistName artistId={year} />}
        </p>
      </div>
      <div className="album-play">
        <Link to={`/albums/${id}`} className="button is-primary is-small">
          Ver
        </Link>
      </div>
    </div>
  );
}

export default AlbumCard;
