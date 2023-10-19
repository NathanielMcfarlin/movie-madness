import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/movies">MOVIE MADNESS</Link>
      </li>
      <Link className="navbar-new" to="/movie-form">
        New Movie
      </Link>
      {localStorage.getItem("user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
