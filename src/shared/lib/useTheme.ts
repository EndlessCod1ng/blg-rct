import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeContext";
import { Theme } from "@/app/providers/ThemeProvider/ThemeProvider";
import { useContext } from "react";
;


export interface UseThemeResult {
  theme?: Theme;
  setTheme?: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext<UseThemeResult>(ThemeContext);
  return { theme, setTheme };
};
