import PropTypes from "prop-types";
import PlayContext from "../../context/PlayContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

OwnerSongsList.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  songFile: PropTypes.string,
  year: PropTypes.number,
};

function OwnerSongsList({ key, id, cover, title, year, songFile }) {
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

  const { token } = useAuth("state");
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta canción?")) {
      axios
        .delete(
          `https://sandbox.academiadevelopers.com/harmonyhub/songs/${id}/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error al eliminar la canción", error);
          alert("Ocurrió un error al eliminar la canción");
        });
    }
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
        <Link
          to={`/songs/edit/${id}`}
          className="button is-primary is-small ml-2"
        >
          Editar
        </Link>
        <button
          className="button is-warning is-small ml-2"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default OwnerSongsList;
