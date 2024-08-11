import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function ArtistName({ artistId }) {
  const [artistName, setArtistName] = useState("Loading...");

  useEffect(() => {
    const fetchArtistName = async () => {
      try {
        const response = await axios.get(
          `https://sandbox.academiadevelopers.com/harmonyhub/artists/${artistId}`
        );
        setArtistName(response.data.name);
      } catch (error) {
        console.error("Error recuperando el nombre del artista:", error);
        setArtistName("Unknown Artist");
      }
    };

    if (artistId) {
      fetchArtistName();
    }
  }, [artistId]);

  return <span>{artistName}</span>;
}

ArtistName.propTypes = {
  artistId: PropTypes.number.isRequired,
};

export default ArtistName;
