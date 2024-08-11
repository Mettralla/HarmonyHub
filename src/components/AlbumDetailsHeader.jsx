import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import CoverDefault from "../assets/cover-default.png";
import { useParams } from "react-router-dom";
import "../styles/AlbumDetailsHeader.css";
import ArtistName from "./ArtistName";

AlbumDetailsHeader.propTypes = {
  id: PropTypes.number,
};

function AlbumDetailsHeader() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(
          `https://sandbox.academiadevelopers.com/harmonyhub/albums/${id}`
        );
        setAlbum(response.data);
      } catch (error) {
        console.error("Error fetching the album:", error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <p>Loading...</p>;
  }

  return (
    <div className="album-page-container has-background-dark box">
      <figure className="image album-cover">
        <img
          src={!album.cover ? CoverDefault : album.cover}
          alt={album.title}
          className="cover-img"
        />
      </figure>
      <div className="album-details">
        <h2 className="album-title">{album.title}</h2>
        <p className="album-artist-year">
          <ArtistName artistId={album.artist} /> - {album.year || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default AlbumDetailsHeader;