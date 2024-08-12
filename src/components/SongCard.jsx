import "../styles/SongCard.css";
import PropTypes from "prop-types";
import PlayContext from "../context/PlayContext";
import { useContext } from "react";

SongCard.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  songFile: PropTypes.string,
  artist: PropTypes.number,
};

/**
 * Componente para mostrar una tarjeta de canción.
 * 
 * Este componente muestra la portada, el título, el año y un botón para reproducir la canción.
 * Al hacer clic en el botón "Play", se actualizan los detalles de la canción en el contexto de reproducción
 * y se inicia la reproducción de la canción.
 * 
 * @param {SongCardProps} props - Propiedades del componente.
 * @returns {JSX.Element} - Un elemento JSX que representa la tarjeta de canción.
 */
function SongCard({ key, id, cover, title, artist, songFile }) {
  const {
    togglePlay,
    setTrackId,
    setTrackTitle,
    setTrackSongFile,
    setTrackYear,
    setTrackCover,
  } = useContext(PlayContext);

  /**
   * Maneja la reproducción de la canción.
   *
   * Actualiza el estado del contexto de reproducción con los detalles de la canción
   * y alterna el estado de reproducción (play/pause).
   *
   * @param {number} id - Identificador único de la canción.
   * @param {string} title - Título de la canción.
   * @param {string} song_file - URL del archivo de la canción.
   * @param {number} year - Año de lanzamiento de la canción.
   * @param {string} cover - URL de la portada de la canción.
   */

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
        <p className="song-artist">{artist}</p>
      </div>
      <div className="song-play">
        <button
          className="button is-primary is-small"
          onClick={() => playTrack(id, title, songFile, artist, cover)}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default SongCard;