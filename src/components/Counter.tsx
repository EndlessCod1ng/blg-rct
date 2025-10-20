import { useState } from "react";
import s from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={``}>
      <div>Counter</div>
      <h1 className={s.blood}>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
};
