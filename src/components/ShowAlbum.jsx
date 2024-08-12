import AlbumDetailsHeader from "./AlbumDetailsHeader";
import AlbumSongs from "./AlbumSongs";
import MusicPlayer from "./MusicPlayer";

/**
 * Componente para mostrar los detalles de un álbum, su lista de canciones y un reproductor de música.
 * 
 * Este componente integra tres subcomponentes:
 * - `AlbumDetailsHeader`: Muestra la información detallada del álbum.
 * - `AlbumSongs`: Lista las canciones del álbum.
 * - `MusicPlayer`: El reproductor de música.
 * 
 * @returns {JSX.Element} 
 */
function ShowAlbum() {
  return (
    <div className="section">
      <AlbumDetailsHeader />

      <AlbumSongs />
      <MusicPlayer />
    </div>
  );
}

export default ShowAlbum;