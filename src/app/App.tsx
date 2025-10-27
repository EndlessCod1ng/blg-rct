import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { useTheme } from "@/shared/lib/useTheme";

import { classNames } from "@/shared/lib/classNames/classNames";

export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={classNames(`app`, {}, [`app_${theme}_theme`])}>
      <Navbar />
      <button onClick={setTheme}>Theme</button>
      <AppRouter />
    </div>
  );
}
