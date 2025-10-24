import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./ThemeProvider";


export interface UseThemeResult {
  theme?: Theme;
  setTheme?: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext<UseThemeResult>(ThemeContext);
  return { theme, setTheme };
};
