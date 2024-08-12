import { useAuth } from "../context/AuthContext";
import ProfileDetailsHeader from "./ProfileDetailsHeader";
import OwnerSongs from "./Songs/OwnerSongs";
import MusicPlayer from "../components/MusicPlayer";

/**
 * Componente que representa la vista del perfil de usuario.
 * Muestra la información del perfil del usuario, sus canciones y un reproductor de música.
 * 
 * Utiliza el hook `useAuth` para obtener el ID del usuario actualmente autenticado.
 * 
 * @component
 * @returns {JSX.Element}
 */
function Profile() { 
  const { user__id } = useAuth("state");

  return (
    <div className="section">
      <ProfileDetailsHeader id={user__id} />

      <OwnerSongs />
      <MusicPlayer />
    </div>
  )
}

export default Profile;
