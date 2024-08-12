import Banner from "./Banner";
import ArtistsList from "./ArtistsList";
import Bnr from "../assets/banners01.jpg";

function ArtistsPage() {
    return (
      <div className="section">
        <Banner
          imageUrl={Bnr}
          buttonLabel="Agregar Artista"
          buttonLink="#"
        />

        <ArtistsList />
      </div>
    );
}

export default ArtistsPage
