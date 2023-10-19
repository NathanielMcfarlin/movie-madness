import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../services/userServices";
import { getAllGenres } from "../Genres";
import "./Fourm.css";

export const MovieForm = ({ currentUser }) => {
  const [allGenres, setAllGenres] = useState([]);
  const [movie, setMovie] = useState({
    title: "",
    moviePoster: "",
    actor: "",
    actorImg: "",
    genreId: 0,
    shortSummary: "",
    userId: 0,
  });

  let navigate = useNavigate();

  const updateMovie = (evt) => {
    const copy = { ...movie };
    copy[evt.target.id] = evt.target.value;

    setMovie(copy);
  };

  useEffect(() => {
    getAllGenres().then((genreArray) => {
      setAllGenres(genreArray);
      console.log(allGenres);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const newMovieItem = {
      title: movie.title,
      moviePoster: movie.moviePoster,
      actor: movie.actor,
      actorImg: movie.actorImg,
      genreId: parseInt(movie.genreId),
      shortSummary: movie.shortSummary,
      userId: currentUser.id,
    };

    createMovie(newMovieItem).then(() => {
      navigate("/movies");
    });
  };

  return (
    <main className="movie-form-container">
      <form className="movie-form">
        <h1 className="header">Movie Form</h1>
        <div className="input-container">
          <fieldset className="movie-form-fieldset">
            <div>
              <label>Movie Title:</label>
              <input
                id="title"
                onChange={updateMovie}
                type="text"
                placeholder="..."
                value={movie.title}
                required
              />
            </div>
          </fieldset>

          <fieldset className="movie-form-fieldset">
            <div>
              <label>Movie Poster URL:</label>
              <input
                id="moviePoster"
                onChange={updateMovie}
                type="text"
                placeholder="https://www.example.com"
                value={movie.moviePoster}
                required
              />
            </div>
          </fieldset>

          <fieldset className="movie-form-fieldset">
            <div>
              <label>Star Actor:</label>
              <input
                id="actor"
                onChange={updateMovie}
                type="text"
                placeholder="..."
                value={movie.actor}
                required
              />
            </div>
          </fieldset>

          <fieldset className="movie-form-fieldset">
            <div>
              <label>Actor Image URL:</label>
              <input
                id="actorImg"
                onChange={updateMovie}
                type="text"
                placeholder="https://www.example.com"
                value={movie.actorImg}
                required
              />
            </div>
          </fieldset>

          <select
            className="select-btn"
            id="genreId"
            onChange={updateMovie}
            value={movie.genreId}
          >
            <option value={0}>Select Genre</option>
            {allGenres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.genre}
                </option>
              );
            })}
          </select>

          <fieldset className="movie-form-fieldset">
            <div className="summary">
              <label>Add a sort summary:</label>
              <input
                onChange={updateMovie}
                type="text"
                id="shortSummary"
                placeholder="..."
                value={movie.shortSummary}
                required
              />
            </div>
          </fieldset>

          <fieldset className="auth-fieldset">
            <div>
              <button className="submit-btn" onClick={handleSave}>
                Submit
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </main>
  );
};
