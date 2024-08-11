import { useAuth } from "../context/AuthContext";
import ProfileDetailsHeader from "./ProfileDetailsHeader";
import OwnerSongs from "./Songs/OwnerSongs";
import MusicPlayer from "../components/MusicPlayer";

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
