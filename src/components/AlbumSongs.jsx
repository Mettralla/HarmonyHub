import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SongsList.css";
import CoverDefault from "../assets/cover-default.png";
import { useParams } from "react-router-dom";
import SongsListCard from "./SongsListCard";

function AlbumSongs() {
    const { id } = useParams();
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const response = await axios.get(
            `https://sandbox.academiadevelopers.com/harmonyhub/albums/${id}/songs`
          );
          setSongs(response.data.results);
        } catch (error) {
          console.error("Error recuperando canciones:", error);
        }
      };

      fetchSongs();
    }, [id]);

    return (
      <div className="songs-list-container box">
        <div className="header">
          <h2 className="title">Canciones</h2>
        </div>
        {songs.length > 0 ? (
          <div className="songs-list columns is-multiline">
            {songs.map((song) => (
              <div key={id} className="column">
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
        ) : (
          <p>No hay canciones en este álbum.</p>
        )}
      </div>
    );
}

export default AlbumSongs;
