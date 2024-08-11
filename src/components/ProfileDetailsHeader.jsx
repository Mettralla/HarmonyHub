import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
import AvatarDefault from "../assets/avatar-default.png";

ProfileDetailsHeader.propTypes = {
  id: PropTypes.number,
};

function ProfileDetailsHeader(id) {
  const [profileData, setProfileData] = useState({});
  const { token } = useAuth("state");

  useEffect(() => {
    const fetchAlbum = async () => {
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
        console.error("Error fetching the album:", error);
      }
    };

    fetchAlbum();
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
        <h2 className="album-title">{profileData.first_name} {profileData.last_name}</h2>
        <p className="album-artist-year">
          {profileData.email}
        </p>
      </div>
    </div>
  );
}

export default ProfileDetailsHeader;
