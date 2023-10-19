import { useEffect, useState } from "react";
import { getAllMovies } from "../Movies.js";
import { getAllGenres } from "../Genres.js";
import "./MovieCard.css";
import { Movies } from "./Movie.js";
import { Link } from "react-router-dom";

export const MovieCatalog = () => {
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
      <h1 className="movie-catalog">Movie catalog</h1>
      <select className="filter-btn" name="filter" onChange={handleChange}>
        <option value="0">ALL MOVIES</option>
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
        {filteredMovies.map((moviesObj) => {
          return (
            <Link to={`/movies/${moviesObj.id}`}>
              <Movies movies={moviesObj} key={moviesObj.id} />
            </Link>
          );
        })}
      </article>
    </div>
  );
};
