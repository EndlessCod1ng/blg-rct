import { useState } from "react";
import "./Counter.scss";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={``}>
      <div>Counter</div>
      <h1 className={"blood"}>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
};
