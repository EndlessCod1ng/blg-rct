import { BugButton } from "@/app/providers/ErrorBoundary/ui/BugButton";
import { Counter } from "../../../components/Counter";

interface MainPageProps {
  className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Counter />
      <BugButton/>
    </div>
  );
};

export default MainPage;
