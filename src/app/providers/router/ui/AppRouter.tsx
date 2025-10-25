import { Route, Routes } from "react-router";
import s from "./AppRouter.module.scss";
import { Suspense } from "react";
import { routeConfig } from "@/shared/config/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
