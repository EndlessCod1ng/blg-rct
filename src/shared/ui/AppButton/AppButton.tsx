import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type ButtonVariant = "clear" | "outlined" | "filled";
type ColorType = "background" | "backgroundInverted";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  colorType?: ColorType;
  variant?: ButtonVariant;
  className?: string;
}

export const AppButton = ({
  children,
  colorType = "backgroundInverted",
  variant = "clear",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      className={classNames(s.appButton, {}, [
        s[colorType],
        s[variant],
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
