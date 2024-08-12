import { useState, useEffect } from "react";
import axios from "axios";
import SongsListCard from "./SongsListCard";
import CoverDefault from "../assets/cover-default.png";
import "../styles/SongsList.css";

/**
 * Componente para mostrar una lista de canciones con paginación.
 * 
 * Este componente realiza una solicitud a la API para obtener las canciones,
 * maneja la paginación de los resultados y muestra cada canción en un componente `SongsListCard`.
 * 
 * @returns {JSX.Element} 
 */
function SongsList() {
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const response = await axios.get(
            `https://sandbox.academiadevelopers.com/harmonyhub/songs?page=${page}`
          );
          setSongs(response.data.results);
          setTotalPages(
            Math.ceil(response.data.count / response.data.results.length)
          );
        } catch (error) {
          console.error("Error recuperando canciones:", error);
        }
      };

      fetchSongs();
    }, [page]);

    return (
      <div className="songs-list-container box">
        <div className="header">
          <h2 className="title">Canciones</h2>
        </div>
        <div className="songs-list columns is-multiline">
          {songs.map((song) => (
            <div key={song.id} className="column">
              <SongsListCard
                key={song.id}
                id={song.id}
                cover={!song.cover ? CoverDefault : song.cover}
                title={song.title}
                year={song.year}
                songFile={song.song_file}
              />
            </div>
          ))}
        </div>

        <nav
          className="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <button
            className="pagination-previous"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="pagination-next"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    );
}

export default SongsList;
