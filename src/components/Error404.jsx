import NotFoundRobot from "../assets/NotFound.png"
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="section is-fullheight has-text-centered">
      <div className="container">
        <figure className="image is-128x128 is-inline-block">
          <img src={NotFoundRobot} alt="Not Found" />
        </figure>
        <p className="title is-4 mt-4">Página no encontrada</p>
        <Link className="button is-primary mt-4">
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
}

export default Error404;