import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { useTheme } from "@/shared/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router";



export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={classNames(`app`, {}, [`app_${theme}_theme`])}>
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
