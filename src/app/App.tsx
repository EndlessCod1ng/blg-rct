import { Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

import "./App.css";

type Theme = "light" | "dark";

export function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <div className={`app app_${theme}_theme`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Theme
      </button>
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
        </Routes>
      </Suspense>
    </div>
  );
}
