import { Link, Route, Routes } from "react-router";
import { Counter } from "../components/Counter";
import "./App.css";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { Suspense } from "react";

export function App() {
  return (
    <div className="bg">
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <Counter />
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
