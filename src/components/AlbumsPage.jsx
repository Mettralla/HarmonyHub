import Banner from "./Banner";
import AlbumList from "./AlbumList";

function AlbumsPage() {
    return (
        <div className="section">
            <Banner
            imageUrl="https://via.placeholder.com/1500x500"
            buttonLabel="Ver más"
            buttonLink="#"
            />
            <AlbumList />
        </div>
    )
}

export default AlbumsPage;