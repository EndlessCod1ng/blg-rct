import { useTranslation } from "react-i18next";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useEffect, useState } from "react";

export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  const { t } = useTranslation();
  return (
    <AppButton
      onClick={() => setError(true)}
      colorType="backgroundInverted"
      variant="outlined"
    >
      {t("throw error")}
    </AppButton>
  );
};
