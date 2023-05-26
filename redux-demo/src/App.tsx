import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevcount) => prevcount + 1);
  };

  return (
    <div className="App">
      value: {count} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
