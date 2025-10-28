import { Route, Routes } from "react-router";
import s from "./AppRouter.module.scss";
import { Suspense } from "react";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
interface AppRouterProps {
  className?: string;
}
export const AppRouter = ({ className }: AppRouterProps) => {
  return (
    <div className={classNames(s.appRouter, {}, [className])}>
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
    </div>
  );
};
