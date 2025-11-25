import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./userListSlice";
import { selectUser } from "../userDetails/userDetailSlice";

function UserList() {
  const users = useSelector((state) => state.userData.users);
  const loading = useSelector((state) => state.userData.loading);
  const error = useSelector((state) => state.userData.error);

  const dispatch = useDispatch();

  return (
    <div className="user-list">
      <h2>User List</h2>

      <button onClick={() => dispatch(fetchData())}>Fetch Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>
            <div className="btn-group">
              <button onClick={() => dispatch(selectUser(user.id))}>
                Select
              </button>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
