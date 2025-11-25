import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Checking Use State Hooks</h1>
      <div className="card">
        <p className="count-paragraph"> Count is {counter}</p>
        <div className="increment-buttons">
          <button onClick={() => setCount((prev) => prev + 1)}> +1 </button>
          <button onClick={() => setCount((prev) => prev - 1)}> -1 </button>
        </div>
      </div>
    </>
  );
}

export default App;