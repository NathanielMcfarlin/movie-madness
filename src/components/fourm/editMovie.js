import { useEffect, useState } from "react";
import { editMovie, getMovieById } from "../services/userServices";
import { useNavigate, useParams } from "react-router-dom";
import { getAllGenres } from "../Genres";
import { deleteItem } from "../services/userServices";

export const EditMovieForm = ({ currentUser }) => {
  const [movies, setMovies] = useState({});
  const [allGenres, setAllGenres] = useState([]);

  const { moviesId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getAllGenres().then((genreArray) => {
      setAllGenres(genreArray);
      console.log(allGenres);
    });
  }, []);

  useEffect(() => {
    getMovieById(moviesId).then((moviesObj) => {
      setMovies(moviesObj);
    });
  }, [moviesId]);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedMovie = {
      id: movies.id,
      title: movies.title,
      moviePoster: movies.moviePoster,
      actor: movies.actor,
      actorImg: movies.actorImg,
      genreId: parseInt(movies.genreId),
      shortSummary: movies.shortSummary,
      userId: currentUser.id,
    };

    editMovie(updatedMovie).then(() => {
      navigate(`/movies/${moviesId}`);
    });
  };

  const handleDelete = () => {
    deleteItem(moviesId).then(() => {
      navigate("/");
    });
  };

  return (
    <main className="movie-form-container">
      <form className="movie-form">
        <h1 className="header">EDIT MOVIE</h1>
        <fieldset className="movie-form-fieldset">
          <div className="edit-form-c">
            <label>Title:</label>
            <input
              id="title"
              type="text"
              placeholder="..."
              value={movies.title ? movies.title : ""}
              required
              onChange={(event) => {
                const movieCopy = { ...movies };
                movieCopy.title = event.target.value;
                setMovies(movieCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset className="movie-form-fieldset">
          <div>
            <label>Movie Poster URL:</label>
            <input
              id="moviePoster"
              type="text"
              placeholder="https://www.example.com"
              value={movies.moviePoster ? movies.moviePoster : ""}
              required
              onChange={(event) => {
                const movieCopy = { ...movies };
                movieCopy.moviePoster = event.target.value;
                setMovies(movieCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset className="movie-form-fieldset">
          <div>
            <label>Star Actor:</label>
            <input
              id="actor"
              type="text"
              placeholder="..."
              value={movies.actor ? movies.actor : ""}
              required
              onChange={(event) => {
                const movieCopy = { ...movies };
                movieCopy.actor = event.target.value;
                setMovies(movieCopy);
              }}
            />
          </div>
        </fieldset>
        <fieldset className="movie-form-fieldset">
          <div>
            <label>Actor Image URL:</label>
            <input
              id="actorImg"
              type="text"
              placeholder="https://www.example.com"
              value={movies.actorImg ? movies.actorImg : ""}
              required
              onChange={(event) => {
                const movieCopy = { ...movies };
                movieCopy.actorImg = event.target.value;
                setMovies(movieCopy);
              }}
            />
          </div>
        </fieldset>
        <select
          className="select-btn"
          id="genreId"
          onChange={(event) => {
            const movieCopy = { ...movies };
            movieCopy.genreId = parseInt(event.target.value);
            setMovies(movieCopy);
          }}
          value={movies.genreId}
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
            <label>Add a short summary:</label>
            <input
              type="text"
              id="shortSummary"
              placeholder="..."
              value={movies.shortSummary ? movies.shortSummary : ""}
              required
              onChange={(event) => {
                const movieCopy = { ...movies };
                movieCopy.shortSummary = event.target.value;
                setMovies(movieCopy);
              }}
            />
          </div>
        </fieldset>
        <button className="submit-btn" onClick={handleSave}>
          Submit
        </button>
        <button className="submit-btn" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </main>
  );
};
