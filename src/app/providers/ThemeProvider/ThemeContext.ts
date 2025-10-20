import { createContext } from "react";
import { Theme } from "./ThemeProvider";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';