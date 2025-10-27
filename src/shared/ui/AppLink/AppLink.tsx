import { Link, LinkProps } from "react-router";
import s from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";

type ColorType = "primary" | "ivertedPrimary";
interface AppLinkProps extends LinkProps {
  children: ReactNode;
  colorType?: ColorType;
  className?: string;
}

export const AppLink = ({
  children,
  to = "/",
  colorType = "ivertedPrimary",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(s.appLink, {}, [s[colorType], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
