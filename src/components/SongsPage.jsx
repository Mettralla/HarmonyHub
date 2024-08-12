import Banner from "./Banner";
import SongsList from "./SongsList";
import MusicPlayer from "./MusicPlayer";
import Bnr from "../assets/banners01.jpg";

function SongsPage() {
    return (
      <div className="section">
        <Banner
          imageUrl={Bnr}
          buttonLabel="Agregar Cancion"
          buttonLink="/songs/add"
        />
        <SongsList />
        <MusicPlayer />
      </div>
    );
}

export default SongsPage;