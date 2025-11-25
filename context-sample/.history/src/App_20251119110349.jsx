import { createContext, useContext, useState } from "react";

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      <div
        style={{ border: "2px solid black", padding: "10px", margin: "10px" }}
      >
        <h1>Example of context api</h1>
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
}

function ChildComponent() {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2>This is a child component</h2>
      <NestedChildComponent />
    </div>
  );
}

function NestedChildComponent() {
  const { count, increment } = useContext(MyContext);
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h3>This is a nested child component</h3>
      <p>Counter value: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
