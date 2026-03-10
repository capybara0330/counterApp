import "./App.css";
import{useState} from "react";

export default function App() {
  const [count, setCount] = useState(0); //create a piece of state initialized to 0, return array with 2 items
  //when setCount called, stores new value & re-runs component function with updated value

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
