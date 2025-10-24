import { Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

import { useTheme } from "./providers/ThemeProvider/useTheme";

import "./App.css";
import { NotFoundPage } from "../pages/NotFoundPage";

export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`app app_${theme}_theme`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>

      <button onClick={setTheme}>Theme</button>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
