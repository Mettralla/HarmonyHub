import ArtistCard from "./ArtistCard";
import "../styles/RecommendedArtists.css";
import PropTypes from "prop-types";
import axios from "axios";
import AvatarDefault from "../assets/avatar-default.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

RecommendedArtists.propTypes = {
  artists: PropTypes.array,
};

function RecommendedArtists() {
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          "https://sandbox.academiadevelopers.com/harmonyhub/artists?page_size=5"
        );
        setArtist(response.data.results)
      } catch (error) {
        console.error("Error recuperando artistas: ", error);
      }
    };

    fetchArtist();
  }, [])

  return (
    <div className="recommended-artists box">
      <div className="level">
        <h2 className="title">Artistas</h2>
        <Link to="/artists" className="button is-link is-small search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="artists-list">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            image={!artist.image ? AvatarDefault : artist.image}
            name={artist.name}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedArtists;
