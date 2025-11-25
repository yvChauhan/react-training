export default function CompletedTaskList({ completedTasks, deleteTask }) {
  return <ul className="completed-task-list">{completedTasks.map()}</ul>;
}
