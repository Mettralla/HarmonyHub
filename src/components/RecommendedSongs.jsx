import "../styles/RecommendedSongs.css";
import SongCard from "./SongCard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import CoverDefault from "../assets/cover-default.png";
// import PlayContext from "../context/PlayContext";
import { Link } from "react-router-dom";

RecommendedSongs.propTypes = {
  songs: PropTypes.array,
};

/**
 * Componente que muestra una lista de canciones recomendadas.
 * Recupera las primeras 5 canciones de la API de la Academia.
 * Cada canción se muestra en una tarjeta con su cover, título, y año de lanzamiento.
 * Al hacer clic en la tarjeta de una canción, se puede redirigir a la página de detalles de la canción.
 *
 * @component
 * @returns {JSX.Element}
 */
function RecommendedSongs() {
  const [songs, setSongs] = useState([]);
  // const {play, togglePlay} = useContext(PlayContext);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://sandbox.academiadevelopers.com/harmonyhub/songs?page_size=5"
        );
        setSongs(response.data.results);
      } catch (error) {
        console.error("Error recuperando canciones: ", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="recommended-songs box">
      <div className="header">
        <h2 className="title">Canciones</h2>
        <Link to="/songs" className="button is-link is-small search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="songs-list">
        {songs.slice(0, 5).map((song) => (
          <SongCard
            key={song.id}
            id={song.id}
            cover={!song.cover ? CoverDefault : song.cover}
            title={song.title}
            artist={song.year}
            songFile={song.song_file}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedSongs;
