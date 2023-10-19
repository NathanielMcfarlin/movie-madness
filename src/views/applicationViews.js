import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { Home } from "../components/home/home";
import { MovieCatalog } from "../components/catalog/MovieCatalog";
import { MovieForm } from "../components/fourm/MovieFourm.js";
import { MovieInfo } from "../components/catalog/movieInfo.js";
import { EditMovieForm } from "../components/fourm/editMovie";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, SetCurrentUser] = useState({});

  useEffect(() => {
    const movieMadnessUser = localStorage.getItem("user");
    const movieMadnessObj = JSON.parse(movieMadnessUser);
    SetCurrentUser(movieMadnessObj);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="movies">
          <Route index element={<MovieCatalog />} />
          <Route
            path=":moviesId"
            element={<MovieInfo currentUser={currentUser} />}
          />
          <Route
            path=":moviesId/edit-form"
            element={<EditMovieForm currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="movie-form"
          element={<MovieForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
