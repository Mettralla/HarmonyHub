import RecommendedAlbums from "./RecommendedAlbums";
import Banner from "./Banner";
import RecommendedSongs from "./RecommendedSongs";
import RecommendedArtists from "./RecommendedArtists";
import MusicPlayer from "./MusicPlayer";
import "../styles/Home.css"
import Bnr from "../assets/banners01.jpg";

function Home() { 
  return (
    <div className="section">
      <Banner
        imageUrl={Bnr}
        buttonLabel="Ver Perfil"
        buttonLink="/profile"
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
