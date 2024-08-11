import Home from "../components/Home.jsx";
import Profile from "../components/Profile.jsx";
import AlbumsPage from "../components/AlbumsPage.jsx";
import ArtistsPage from "../components/ArtistsPage.jsx";
import SongsPage from "../components/SongsPage.jsx";
import ShowAlbum from "../components/ShowAlbum.jsx";
import ShowArtistSongs from "../components/ShowArtistSongs.jsx";
import LoginPage from "../components/Auth/LoginPage.jsx";
import Layout from "./Layout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "albums",
        children: [
          {
            index: true,
            element: <AlbumsPage />,
          },
          {
            path: ":id",
            element: <ShowAlbum />,
          },
        ],
      },
      {
        path: "artists",
        children: [
          {
            index: true,
            element: <ArtistsPage />,
          },
          {
            path: ":id",
            element: <ShowArtistSongs />,
          },
        ],
      },
      {
        path: "songs",
        element: <SongsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default Router;