import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink to={"/"}>Home</AppLink>
        <AppLink to={"/profile"}>Profile</AppLink>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
