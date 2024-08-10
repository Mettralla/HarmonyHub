import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "./AlbumCard";
import "../styles/AlbumList.css";

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          `http://sandbox.academiadevelopers.com/harmonyhub/albums?page=${page}`
        );
        setAlbums(response.data.results);
        setTotalPages(
          Math.ceil(response.data.count / response.data.results.length)
        );
      } catch (error) {
        console.error("Error fetching the albums:", error);
      }
    };

    fetchAlbums();
  }, [page]);

  return (
    <div className="album-list-container box">
      <div className="header">
        <h2 className="title">Albums</h2>
      </div>
      <div className="albums-list columns is-multiline">
        {albums.map((album) => (
          <div key={album.id} className="column">
            <AlbumCard
              key={album.id}
              cover={album.cover}
              title={album.title}
              year={album.year || "N/A"}
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

export default AlbumList;
