export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (user) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const getMovieById = (id) => {
  return fetch(`http://localhost:8088/movies/${id}`).then((res) => res.json());
};

export const createMovie = (movie) => {
  return fetch("http://localhost:8088/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};

export const createGenre = (genre) => {
  return fetch("http://localhost:8088/genres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(genre),
  }).then((res) => res.json());
};

export const deleteItem = (moviesId) => {
  return fetch(`http://localhost:8088/movies/${moviesId}`, {
    method: "DELETE",
  });
};

export const editMovie = (movie) => {
  return fetch(`http://localhost:8088/movies/${movie.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
};
