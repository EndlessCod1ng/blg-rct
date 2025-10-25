import { Suspense } from "react";
import { Link } from "react-router";

import { useTheme } from "@/shared/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/ui/AppRouter";

export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={classNames(`app`, {}, [`app_${theme}_theme`])}>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>

      <button onClick={setTheme}>Theme</button>

      <AppRouter />
    </div>
  );
}
