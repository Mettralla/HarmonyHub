import PropTypes from "prop-types";
import "../styles/RecommendedAlbums.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CoverDefault from "../assets/cover-default.png"

RecommendedAlbums.propTypes = {
  albums: PropTypes.array,
};

function RecommendedAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        axios
        .get(
          "https://sandbox.academiadevelopers.com/harmonyhub/albums?page_size=5"
        )
        .then((response) => {
          setAlbums(response.data.results);
        })
      } catch(error) {
        console.error("Error recuperando albums: ", error);
      }
    };

    fetchAlbum();
  }, []);

  return (
    <div className="album-row">
      <div className="level">
        <div className="level-left">
          <h2 className="title is-4">Álbumes Recomendados</h2>
        </div>
        <div className="level-right">
          <button className="button is-link">Ver más</button>
        </div>
      </div>
      <div className="columns is-mobile">
        {albums.slice(0, 5).map((album) => (
          <div key={album.id} className="column is-one-fifth">
            <div className="card">
              <div className="card-image">
                <figure className="image is-square">
                  <img
                    src={!album.cover ? CoverDefault : album.cover}
                    alt={`${album.title}`}
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-6">{album.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedAlbums;
