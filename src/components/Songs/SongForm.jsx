import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SongForm() {
  const [songData, setSongData] = useState({ title: "", year: "", album: "" });
  const [songFile, setSongFile] = useState(null);
  const [cover, setCover] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { token, user__id } = useAuth("state");
  const navigate = useNavigate();

  function handleInputChange(event) {
    setSongData({
      ...songData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSongFileChange(event) {
    setSongFile(event.target.files[0]);
  }

  function handleCoverChange(event) {
    setCover(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!submitting) {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("title", songData.title);
      formData.append("year", songData.year);
      formData.append("album", songData.album);
      formData.append("owner", user__id);

      if (songFile) {
        formData.append("song_file", songFile);
      }
      if (cover) {
        formData.append("cover", cover);
      }

      axios
        .post(
          `https://sandbox.academiadevelopers.com/harmonyhub/songs/`,
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          navigate("/profile");
        })
        .catch((error) => {
          console.error("Error al crear la canción", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  }

  return (
    <form className="box m-4 p-4 has-background-dark" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Título</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="title"
            value={songData.title}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Año</label>
        <div className="control">
          <input
            className="input"
            type="number"
            name="year"
            value={songData.year}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Archivo de Audio</label>
        <div className="control">
          <input
            className="input"
            type="file"
            accept="audio/*"
            onChange={handleSongFileChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Cover</label>
        <div className="control">
          <input
            className="input"
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button is-primary"
            type="submit"
            disabled={submitting}
          >
            Crear Canción
          </button>
        </div>
      </div>
    </form>
  );
}

export default SongForm;
