import { useState } from "react";
import { useDispatch } from "react-redux";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    dispatch(addUser(newUser));
    setEmail("");
    setName("");
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
