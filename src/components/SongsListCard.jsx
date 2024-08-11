import PropTypes from "prop-types";
import PlayContext from "../context/PlayContext";
import { useContext } from "react";

SongsListCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  songFile: PropTypes.string,
  year: PropTypes.number,
};

function SongsListCard({ key, id, cover, title, year, songFile }) {
    const {
      togglePlay,
      setTrackId,
      setTrackTitle,
      setTrackSongFile,
      setTrackYear,
      setTrackCover,
    } = useContext(PlayContext);

    const playTrack = (id, title, song_file, year, cover) => {
      setTrackId(id);
      setTrackTitle(title);
      setTrackSongFile(song_file);
      setTrackYear(year);
      setTrackCover(cover);
      togglePlay();
    };

    return (
      <div className="song-card has-background-dark">
        <figure key={key} className="image is-48x48">
          <img src={cover} alt={title} className="song-cover" />
        </figure>
        <div className="song-info">
          <p className="song-title">{title}</p>
          <p className="song-year">{year}</p>
        </div>
        <div className="song-play">
          <button
            className="button is-primary is-small"
            onClick={() => playTrack(id, title, songFile, year, cover)}
          >
            Play
          </button>
        </div>
      </div>
    );
}

export default SongsListCard;
