import AlbumDetailsHeader from "./AlbumDetailsHeader";
import AlbumSongs from "./AlbumSongs";
import MusicPlayer from "./MusicPlayer";

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