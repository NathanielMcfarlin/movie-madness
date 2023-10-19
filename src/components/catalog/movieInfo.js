import { useEffect, useState } from "react";
import { Link, Route, useNavigate, useParams } from "react-router-dom";
import { editMovie, getMovieById } from "../services/userServices";
import "./movieInfo.css";

export const MovieInfo = ({ currentUser }) => {
  const [movies, setMovies] = useState({});

  const { moviesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(moviesId).then((moviesObj) => {
      setMovies(moviesObj);
    });
  }, [moviesId]);

  const isOwner = currentUser.id === movies.userId;

  return (
    <div className="all-info">
      <div className="left-side">
        <h1 className="movie-title">{movies.title}</h1>
        <img className="poster" src={movies.moviePoster} alt="poster" />
      </div>
      <div className="right-side">
        <h1 className="star-title">Star Actor:</h1>
        <h2 className="name">{movies.actor}</h2>
        <img className="actor-img" src={movies.actorImg} alt="actorImg" />
        <p className="info-sum">{movies.shortSummary}</p>
      </div>
      <div></div>
      {isOwner && (
        <>
          <div className="btn-container">
            <Link className="edit-btn" to={"edit-form"}>
              Edit
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
