import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RouteProps } from "react-router";

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}
type AppRouteProps = RouteProps & {
  name: string;
};

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
    name: "Main",
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPath.profile,
    element: <ProfilePage />,
    name: "Profile",
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />,
    name: "NotFound",
  },
};
