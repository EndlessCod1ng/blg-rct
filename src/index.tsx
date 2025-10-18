import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div>
      Hello World
      <Counter />
    </div>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
