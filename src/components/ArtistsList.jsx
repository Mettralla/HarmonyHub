import { useState, useEffect } from "react";
import axios from "axios";
import ArtistListCard from "./ArtistListCard";
import "../styles/ArtistsList.css";

function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(
          `https://sandbox.academiadevelopers.com/harmonyhub/artists?page=${page}`
        );
        setArtists(response.data.results);
        setTotalPages(
          Math.ceil(response.data.count / response.data.results.length)
        );
      } catch (error) {
        console.error("Error fetching the artists:", error);
      }
    };

    fetchArtists();
  }, [page]);

  return (
    <div className="artists-list-container box">
      <div className="header">
        <h2 className="title">Artistas</h2>
      </div>
      <div className="artists-list columns is-multiline">
        {artists.map((artist) => (
          <div key={artist.id} className="column">
            <ArtistListCard
              key={artist.id}
              image={artist.image}
              name={artist.name}
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

export default ArtistsList;
