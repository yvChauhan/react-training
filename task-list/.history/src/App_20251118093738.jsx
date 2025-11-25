import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="app">
      <div className="task-container">
        <h1> Task List with Priority</h1>
        <button className="">+</button>
        <TaskForm />
      </div>
      <div className="task-container"></div>
      <div className="completed-task-container"></div>
    </div>
  );
}

export default App;
