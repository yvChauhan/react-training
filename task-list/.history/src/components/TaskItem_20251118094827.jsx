export default function TaskItem({ task, completeTask, deleteTask }) {
  const { title, priority, deadline, id } = task;
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>({priority})</strong>
        </div>
        <div className="task-deadline">
          Due: {new Date(deadline).toLocaleDateString()}{" "}
        </div>
      </div>
      <div className="task-buttons">
        <button className="complete-button" onClick={() => completeTask(id)}>
          Complete
        </button>
        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
