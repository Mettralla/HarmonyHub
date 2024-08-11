import Banner from "./Banner";
import SongsList from "./SongsList";
import MusicPlayer from "./MusicPlayer";

function SongsPage() {
    return (
      <div className="section">
        <Banner
          imageUrl="https://via.placeholder.com/1500x500"
          buttonLabel="Ver más"
          buttonLink="#"
        />
        <SongsList />
        <MusicPlayer />
      </div>
    );
}

export default SongsPage;