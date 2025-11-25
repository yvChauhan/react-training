import { useState } from "react";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form action="" className="add-user-form">
      <input type="text" placeholder="Enter user name" />
      <input type="email" placeholder="Enter user email" />
      <button type="submit">Add User</button>
    </form>
  );
}
