import { Counter } from "../../../components/Counter";

interface HomePageProps {
  className?: string;
}
const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>HomePage</div>
      <Counter />
    </div>
  );
};

export default HomePage;
