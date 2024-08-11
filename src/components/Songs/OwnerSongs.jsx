import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/SongsListCard.css";
import CoverDefault from "../../assets/cover-default.png";
import OwnerSongsList from "./OwnerSongsList";
import { useAuth } from "../../context/AuthContext";

function OwnerSongs() {
const { user__id } = useAuth("state");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `https://sandbox.academiadevelopers.com/harmonyhub/songs?owner=${user__id}`
        );
        setSongs(response.data.results);
      } catch (error) {
        console.error("Error recuperando canciones:", error);
      }
    };

    fetchSongs();
  }, [user__id]);

  return (
    <div className="songs-list-container box">
      <div className="header">
        <h2 className="title">Canciones Creadas</h2>
      </div>
      {songs.length > 0 ? (
        <div className="songs-list columns is-multiline">
          {songs.map((song) => (
            <div key={song.id} className="column">
              <OwnerSongsList
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

export default OwnerSongs;
