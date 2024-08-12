import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
import AvatarDefault from "../assets/avatar-default.png";
import "../styles/AlbumDetailsHeader.css"

ProfileDetailsHeader.propTypes = {
  id: PropTypes.number,
};

/**
 * Componente que muestra los detalles del perfil del usuario.
 * Incluye la foto de perfil, nombre completo y correo electrónico del usuario.
 * 
 * Utiliza el hook `useAuth` para obtener el token de autenticación y realizar la solicitud de datos.
 * 
 * @component
 * @example
 * return (
 *   <ProfileDetailsHeader id={1} />
 * )
 * @param {number} id - ID del perfil de usuario a mostrar.
 * @returns {JSX.Element} La vista de detalles del perfil del usuario.
 */
function ProfileDetailsHeader({id}) {
  const [profileData, setProfileData] = useState({});
  const { token } = useAuth("state");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://sandbox.academiadevelopers.com/users/profiles/profile_data/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching the profile:", error);
      }
    };

    fetchProfile();
  }, [id, token]);

  return (
    <div className="album-page-container has-background-dark box">
      <figure className="image album-cover">
        <img
          src={!profileData.image ? AvatarDefault : profileData.image}
          alt={profileData.last_name}
          className="cover-img"
        />
      </figure>
      <div className="album-details">
        <h2 className="title">{profileData.first_name} {profileData.last_name}</h2>
        <p className="subtitle mt-3">
          {profileData.email}
        </p>
      </div>
    </div>
  );
}

export default ProfileDetailsHeader;
