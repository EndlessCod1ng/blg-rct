import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={s.notFOundPage}>
      <div>{t("Page Not Found")}</div>
    </div>
  );
};
export default NotFoundPage;
