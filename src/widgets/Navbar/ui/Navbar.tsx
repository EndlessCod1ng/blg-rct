import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        {Object.entries(routeConfig).map((r) => {
          return r[1].path !== "*" ? (
            <AppLink to={r[1].path || "/"}>{r[1].name}</AppLink>
          ) : undefined;
        })}
      </div>

      <div className={s.authBtn}>Login not work</div>
    </div>
  );
};
