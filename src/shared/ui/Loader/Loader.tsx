import s from "./Loader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
type LoaderColorType = "background" | "backgroundInverted";
interface LoaderProps {
  colorType?: LoaderColorType;
  className?: string;
}
export const Loader = ({
  className,
  colorType = "backgroundInverted",
}: LoaderProps) => {
  return (
    <div className={classNames(s.ldsEllipsis, {}, [className, s[colorType]])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
