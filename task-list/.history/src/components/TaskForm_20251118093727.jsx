export default function TaskForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title..." />
      <select>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input type="datetime-local" required />
      <button type="submit">Add Task</button>
    </form>
  );
}
