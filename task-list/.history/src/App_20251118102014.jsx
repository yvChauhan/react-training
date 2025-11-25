import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openSection, setOpenSection] = useState({
    taskList: false,
    task: true,
    completedTasks: true,
  });

  function toggleSection(section) {
    setOpenSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  }

  function addTask(newTask) {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completedTask = tasks.filter((task) => task.completed);
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1> Task List with Priority</h1>
        <button
          className={`close-button ${openSection.task ? "open" : ""}`}
          onClick={() => toggleSection("task")}
        >
          +
        </button>
        {openSection.task && <TaskForm addTask={addTask} />}
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >
          +
        </button>
        <div className="sort-controls">
          <button className="">By Date</button>
          <button className="">By Priority</button>
        </div>
        {openSection.taskList && (
          <TaskList
            completeTask={completeTask}
            deleteTask={deleteTask}
            activeTasks={activeTasks}
          />
        )}
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button
          className={`close-button ${openSection.completedTasks ? "open" : ""}`}
          onClick={() => toggleSection("completedTasks")}
        >
          +
        </button>
        {openSection.completedTasks && (
          <CompletedTaskList
            deleteTask={deleteTask}
            completedTasks={completedTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
