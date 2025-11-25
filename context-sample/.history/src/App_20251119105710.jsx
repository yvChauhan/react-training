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

export default App;
