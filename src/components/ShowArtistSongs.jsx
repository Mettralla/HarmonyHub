import ArtistDetailsHeader from "./ArtistDetailsHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArtistDiscography from "./ArtistDiscography";
import MusicPlayer from "./MusicPlayer";

function ShowArtistSongs() {
    const { id } = useParams();
    const [artist, setArtist] = useState({});

    useEffect(() => {
      const fetchArtist = async () => {
        try {
          const response = await axios.get(
            `https://sandbox.academiadevelopers.com/harmonyhub/artists/${id}`
          );
          setArtist(response.data);
        } catch (error) {
          console.error("Error fetching the artist:", error);
        }
      };

      fetchArtist();
    }, [id]);

    return (
      <div className="section">
        <ArtistDetailsHeader artist={artist} />
        <ArtistDiscography artist={artist} />
        <MusicPlayer />
      </div>
    );
}

export default ShowArtistSongs;