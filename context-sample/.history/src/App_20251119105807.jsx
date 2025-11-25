import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Example of context api</h1>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return (
    <div>
      <h2>This is a child component</h2>
      <NestedChildComponent />
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
