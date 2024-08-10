import "../styles//AlbumCard.css"; 
import PropTypes from "prop-types";
import CoverDefault from "../assets/cover-default.png";

AlbumCard.propTypes = {
  key: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
};

function AlbumCard({ key, cover, title, year }) {
  return (
    <div className="album-card has-background-dark">
      <figure key={key} className="image is-48x48">
        <img src={!cover ? CoverDefault : cover} alt={title} className="album-cover" />
      </figure>
      <div className="album-info">
        <p className="album-title">{title}</p>
        <p className="album-year">{year}</p>
      </div>
      <div className="album-play">
        <button className="button is-primary is-small">Ver</button>
      </div>
    </div>
  );
}

export default AlbumCard;
