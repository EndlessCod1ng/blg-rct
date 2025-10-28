import { useState } from "react";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={s.links}>
        <AppLink to={"/"}>Home</AppLink>
        <AppLink to={"/profile"}>Profile</AppLink>
      </div>
      <AppButton
        className={s.btn}
        colorType="background"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed === true ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
