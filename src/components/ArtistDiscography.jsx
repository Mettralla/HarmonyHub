import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SongsList.css";
import CoverDefault from "../assets/cover-default.png";
import SongsListCard from "./SongsListCard";
import PropTypes from "prop-types";

ArtistDiscography.propTypes = {
  artist: PropTypes.array,
};

function ArtistDiscography({artist}) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const songPromises = artist.songs.map((songId) =>
            axios.get(
              `https://sandbox.academiadevelopers.com/harmonyhub/songs/${songId}`
            )
          );

          const songResponses = await Promise.all(songPromises);
          const songData = songResponses.map((response) => response.data);

          setSongs(songData);
        } catch (error) {
          console.error("Error fetching songs:", error);
        }
      };

      fetchSongs();
    }, [artist.songs]);

    if (!songs.length) {
      return <p>No hay canciones disponibles para este artista.</p>;
    }

    return (
      <div className="songs-list-container box">
        <div className="header">
          <h2 className="title">Discografía</h2>
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
      </div>
    );
}

export default ArtistDiscography;