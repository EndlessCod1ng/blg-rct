import { useState } from "react";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div
      data-testid={"sidebar"}
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={s.links}>
        <AppLink to={"/"}>{t("Home")}</AppLink>
        <AppLink to={"/profile"}>{t("Profile")}</AppLink>
      </div>
      <AppButton
        data-testid={"sidebar-toggle"}
        className={s.btn}
        colorType="backgroundInverted"
        variant="filled"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed === true ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher collapsed={collapsed} />
      </div>
    </div>
  );
};
