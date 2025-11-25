import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState([]);

  function completeTask(id) {
    // Function to mark a task as complete
  }

  function deleteTask(id) {
    // Function to delete a task
  }

  return (
    <div className="app">
      <div className="task-container">
        <h1> Task List with Priority</h1>
        <button className="">+</button>
        <TaskForm />
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <button className="">+</button>
        <div className="sort-controls">
          <button className="">By Date</button>
          <button className="">By Priority</button>
        </div>
        <TaskList
          completeTask={completeTask}
          deleteTask={deleteTask}
          activeTasks={task}
        />
      </div>
      <div className="completed-task-container"></div>
    </div>
  );
}

export default App;
