import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

function LoginPage() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth("actions");

  function handleSubmit(event) {
    event.preventDefault();
    if (!isLoading) {
      setIsLoading(true);

      let responseData;

      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}api-auth/`, {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then((response) => {
          responseData = response.data;
          login(responseData.token);

          if (responseData.token) {
            return axios.get(
              `${
                import.meta.env.VITE_API_BASE_URL
              }users/profiles/profile_data/`,
              {
                headers: {
                  Authorization: `Token ${responseData.token}`,
                },
              }
            );
          } else {
            throw new Error("No se obtuvo un token");
          }
        })
        .then((profileResponse) => {
          const profileData = profileResponse.data;
          login(responseData.token, profileData.user__id);
        })
        .catch((error) => {
          console.error(
            "Error al iniciar sesión o al obtener id de usuario",
            error
          );
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4">
            <h1 className="title has-text-centered">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label" htmlFor="username">
                  Nombre de usuario:
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    id="username"
                    name="username"
                    ref={usernameRef}
                    placeholder="Ingrese su nombre de usuario"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Contraseña:
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Ingrese su contraseña"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-primary is-fullwidth"
                  >
                    Enviar
                  </button>
                  {isLoading && <p>Cargando...</p>}
                  {isError && <p>Error al cargar los datos.</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
