import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  }

  function completeTask(id) {
    setTasks(tasks.map((task)=> (task.id === id ? {...task, completed: true })))
  }

  function deleteTask(id) {
    // Function to delete a task
  }

  return (
    <div className="app">
      <div className="task-container">
        <h1> Task List with Priority</h1>
        <button className="">+</button>
        <TaskForm addTask={addTask} />
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
          activeTasks={tasks}
        />
      </div>
      <div className="completed-task-container"></div>
    </div>
  );
}

export default App;
