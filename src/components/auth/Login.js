import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "./Login.css"
import { getUserByEmail } from "../services/userServices";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id,
          })
        );

        navigate("/movies");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="auth-container">
      <h1 className="sign-in-title">MOVIE MADNESS</h1>
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Please sign in</h2>
          <fieldset className="auth-fieldset">
            <div>
              <input
                type="email"
                value={email}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <button type="submit">Sign in</button>
            </div>
          </fieldset>
          <div className="register-link">
            <Link to="/register">Not a member yet?</Link>
          </div>
        </form>
      </section>
    </main>
  );
};