import Banner from "./Banner";
import AlbumList from "./AlbumList";
import Bnr from "../assets/banners01.jpg";

function AlbumsPage() {
  return (
  <div className="section">
    <Banner
    imageUrl={Bnr}
    buttonLabel="Agregar Album"
    buttonLink="#"
    />
    <AlbumList />
  </div>
  )
}

export default AlbumsPage;