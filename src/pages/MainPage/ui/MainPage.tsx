import { Counter } from "../../../components/Counter";

interface MainPageProps {
  className?: string;
}
const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>MainPage</div>
      <Counter />
    </div>
  );
};

export default MainPage;
