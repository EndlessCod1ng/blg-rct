import { useTheme } from "@/shared/lib/useTheme";
import DarkTheme from "@/shared/assets/icons/theme-dark.svg";
import LightTheme from "@/shared/assets/icons/theme-light.svg";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <AppButton
      onClick={setTheme}
    >
      {theme === "dark" ? <LightTheme /> : <DarkTheme />}
    </AppButton>
  );
};
