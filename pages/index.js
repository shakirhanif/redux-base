import { Inter } from "@next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>decrement</button>
    </>
  );
}
