import RecommendedAlbums from "./RecommendedAlbums";
import Banner from "./Banner";
import RecommendedSongs from "./RecommendedSongs";
import RecommendedArtists from "./RecommendedArtists";
import MusicPlayer from "./MusicPlayer";
import "../styles/Home.css"


function Home() { 
  return (
    <div className="section">
      <Banner
        imageUrl="https://via.placeholder.com/1500x500"
        buttonLabel="Ver más"
        buttonLink="#"
      />
      <RecommendedAlbums />
      <div className="recommended-section">
        <RecommendedArtists />
        <RecommendedSongs />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default Home;
