export const Movies = ({ movies }) => {
  return (
    <section>
      <div className="container">
        <div className="card">
          <img
            className="front"
            src={movies.moviePoster}
            alt="poster"
            style={{ backgroundImage: movies.moviePoster }}
          />
          <div className="back">
            <h1 className="star">Star Actor</h1>
            <h2 className="actor-name">{movies.actor}</h2>
            <img
              className="back-img"
              src={movies.actorImg}
              alt="actorImg"
              height="150px"
              max-width="75px"
            />
            <p>{movies.shortSummary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <header className="movie-title">{movies.title}</header>
        <img className="poster" src={movies.moviePoster} alt="poster"></img>
        <div>
          Star Actor: {movies.actor}
          <img
            className="actor-img"
            src={movies.actorImg}
            alt="actor-img"
          ></img>
        </div>
        <div className="summary">{movies.shortSummary}</div> */
}
