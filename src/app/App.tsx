import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { useTheme } from "@/shared/lib/useTheme";

import { classNames } from "@/shared/lib/classNames/classNames";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames(`app`, {}, [`app_${theme}_theme`])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
