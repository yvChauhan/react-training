import { useDispatch, useSelector } from "react-redux";
import { clearSelection } from "./userDetailSlice";

function UserDetails() {
  const dispatch = useDispatch();

  const selectedUser = useSelector((state) => state.userDetail.selectedUser);
  const users = useSelector((state) => state.userData.users);

  if (!selectedUser) {
    return <div className="user-details">No user selected</div>;
  }

  const user = users.find((u) => u.id === selectedUser);

  if (!user) {
    return <div className="user-details">User not found</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <button onClick={() => dispatch(clearSelection())}>
        Clear Selection
      </button>
    </div>
  );
}

export default UserDetails;
