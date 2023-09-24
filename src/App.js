import { useEffect, useState } from "react";
import { getAllMovies } from "./catalog/movies";
import { getAllGenres } from "./catalog/genres";
import "./App.css";
import "./index.css";

export const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((moviesArray) => {
      setAllMovies(moviesArray);
      console.log("Movies are set!");
    });
  }, []);

  useEffect(() => {
    getAllGenres().then((genreArray) => {
      setAllGenres(genreArray);
      console.log(allGenres);
    });
  }, []);
  // to bring in genres

  useEffect(() => {
    if (selectedGenre > 0) {
      const movieGenre = allMovies.filter(
        (movie) => movie.genreId === selectedGenre
      );
      setFilteredMovies(movieGenre);
    } else {
      setFilteredMovies(allMovies);
    }
  }, [selectedGenre, allMovies]);
  // if else

  const handleChange = (event) => {
    setSelectedGenre(parseInt(event.target.value));
  };

  // select tag
  return (
    <div className="movies-container">
      <h1>MOVIE MADNESS</h1>
      <select name="filter" onChange={handleChange}>
        <option value="0">--ALL MOVIES--</option>
        {allGenres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.genre}
            </option>
          );
        })}
      </select>
      <div className="menu-container"></div>
      <article className="movies">
        {filteredMovies.map((movies) => {
          return (
            <section className="movie" key={movies.id}>
              <header className="movie-title">{movies.title}</header>
              <img
                className="poster"
                src={movies.moviePoster}
                alt="poster"
              ></img>
              <div>
                Star Actor: {movies.actor}
                <img
                  className="actor-img"
                  src={movies.actorImg}
                  alt="actor-img"
                ></img>
              </div>
              <div>{movies.genre}</div>
              <div className="summary">{movies.shortSummary}</div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
