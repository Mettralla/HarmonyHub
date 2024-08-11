import Banner from "./Banner";
import ArtistsList from "./ArtistsList";

function ArtistsPage() {
    return (
      <div className="section">
        <Banner
          imageUrl="https://via.placeholder.com/1500x500"
          buttonLabel="Ver más"
          buttonLink="#"
        />

        <ArtistsList />
      </div>
    );
}

export default ArtistsPage
