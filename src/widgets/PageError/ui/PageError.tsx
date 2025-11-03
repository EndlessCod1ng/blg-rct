import { useTranslation } from "react-i18next";
import s from "./PageError.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.pageError}>
      <p>{t("An unexpected error occurred")}</p>
      <AppButton
        variant="outlined"
        onClick={() => location.reload()}
      >
        {t("Refresh page")}
      </AppButton>
    </div>
  );
};
