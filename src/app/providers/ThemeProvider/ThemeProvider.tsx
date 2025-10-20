import { ReactNode, useContext, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
export type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || "dark"
  );

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: toggleTheme }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export interface UseThemeResult {
  theme?: Theme;
  setTheme?: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext<UseThemeResult>(ThemeContext);
  return { theme, setTheme };
};
