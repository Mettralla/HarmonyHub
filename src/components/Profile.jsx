import { useAuth } from "../context/AuthContext";
import ProfileDetailsHeader from "./ProfileDetailsHeader";

function Profile() { 
  const { user__id } = useAuth("state");

  return (
    <div className="section">
      <ProfileDetailsHeader id={user__id} />
      
    </div>
  )
}

export default Profile;
