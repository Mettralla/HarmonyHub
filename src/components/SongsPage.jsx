import Banner from "./Banner";
import SongsList from "./SongsList";
import MusicPlayer from "./MusicPlayer";
import Bnr from "../assets/banners01.jpg";

/**
 * Componente de la página de canciones.
 * 
 * Este componente organiza la vista de la página de canciones, incluyendo un banner 
 * en la parte superior, una lista de canciones y un reproductor de música. 
 * 
 * @returns {JSX.Element}
 */
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