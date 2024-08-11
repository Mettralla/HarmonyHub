// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AvatarDefault from "../assets/avatar-default.png";

ArtistDetailsHeader.propTypes = {
  id: PropTypes.number,
  artist: PropTypes.array,
};

function ArtistDetailsHeader({artist}) {
  // const { id } = useParams();
  // const [artist, setArtist] = useState({});

  // useEffect(() => {
  //   const fetchArtist = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://sandbox.academiadevelopers.com/harmonyhub/artists/${id}`
  //       );
  //       setArtist(response.data);
  //     } catch (error) {
  //       console.error("Error fetching the artist:", error);
  //     }
  //   };

  //   fetchArtist();
  // }, [id]);

  return (
    <div className="album-page-container has-background-dark box">
      <figure className="image album-cover">
        <img
          src={!artist.image ? AvatarDefault : artist.image}
          alt={artist.name}
          className="cover-img"
        />
      </figure>
      <div className="album-details">
        <h2 className="album-title">{artist.name}</h2>
        <p className="album-artist-year">
          {artist.bio === null ? null : `${artist.bio}`}{" "}
          {artist.website === null ? null : `- Website: ${artist.website}`}
        </p>
      </div>
    </div>
  );
}

export default ArtistDetailsHeader;
