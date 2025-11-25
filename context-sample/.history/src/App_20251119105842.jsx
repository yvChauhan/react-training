import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Example of context api</h1>
      <ChildComponent count={count} increment={increment} />
    </div>
  );
}

function ChildComponent({ count, increment }) {
  return (
    <div>
      <h2>This is a child component</h2>
      <NestedChildComponent count={count} increment={increment} />
    </div>
  );
}

function NestedChildComponent({ count, increment }) {
  return (
    <div>
      <h3>This is a nested child component</h3>
      <p>Counter value: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
