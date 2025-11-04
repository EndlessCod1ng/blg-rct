import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  collapsed: boolean;
}
export const LanguageSwitcher = ({ collapsed }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  return (
    <AppButton
      onClick={async () =>
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
      }
      colorType="background"
    >
      {collapsed ? t("ShortLang") : t("Lang")}
    </AppButton>
  );
};
