import { useState } from "react";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user submission logic here
  };

  return (
    <form action="" className="add-user-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user email"
      />
      <button type="submit" onClick={handleSubmit}>
        Add User
      </button>
    </form>
  );
}
export default AddUserForm;
