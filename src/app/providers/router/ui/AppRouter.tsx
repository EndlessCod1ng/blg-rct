import { Route, Routes } from "react-router";
import s from "./AppRouter.module.scss";
import { Suspense } from "react";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { PageLoader } from "@/widgets/PageLoader";
interface AppRouterProps {
  className?: string;
}
export const AppRouter = ({ className }: AppRouterProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.appRouter, {}, [className])}>
      <Suspense fallback={<PageLoader/>}>
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
