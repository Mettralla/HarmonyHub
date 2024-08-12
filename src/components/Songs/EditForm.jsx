import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
 * Componente de formulario para editar los detalles de una canción.
 * 
 * Carga los datos de la canción a editar, permite al usuario modificar la información
 * y envía los cambios a la API.
 * 
 * @returns {JSX.Element} 
 */
function EditForm() {
  const { id } = useParams();
  const [songData, setSongData] = useState({ title: "", year: "", album: "" });
  const [submitting, setSubmitting] = useState(false);

  const { token } = useAuth("state");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${id}/`)
      .then((response) => {
        setSongData({
          title: response.data.title,
          year: response.data.year,
          album: response.data.album,
        });
      })
      .catch((error) => {
        console.error("Error al cargar la canción", error);
      });
  }, [id, token]);

  function handleInputChange(event) {
    setSongData({
      ...songData,
      [event.target.name]: event.target.value || "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    axios
      .patch(
        `https://sandbox.academiadevelopers.com/harmonyhub/songs/${id}/`,
        songData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Error al actualizar la canción", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <label className="label">Álbum</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="album"
            value={songData.album}
            onChange={handleInputChange}
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
            Actualizar Canción
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditForm;
