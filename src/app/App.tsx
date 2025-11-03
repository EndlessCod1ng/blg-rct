import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { useTheme } from "@/shared/lib/useTheme";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Sidebar } from "@/widgets/Sidebar";
import { useEffect } from "react";

export function App() {
  const { theme } = useTheme();
  // useEffect(() => {
  //   if (true) {
  //     throw new Error();
  //   }
  // }, []);

  return (
    <div className={classNames(`app`, {}, [`app_${theme}_theme`])}>
      <Navbar className={"navbar"} />
      <div className={"content"}>
        <Sidebar className="sidebar" />
        <AppRouter className="appRouter" />
      </div>
    </div>
  );
}
