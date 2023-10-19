import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login.js";
import { Register } from "./components/auth/Register.js";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/applicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
