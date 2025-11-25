import AddUserForm from "./components/AddUserForm";
import UserDetails from "./features/userDetails/UserDetails";
import UserList from "./features/userList/UserList";

function App() {
  return (
    <div className="app-container">
      <h1>User Management App</h1>
      <AddUserForm />
      <UserDetails />
      <UserList />
    </div>
  );
}

export default App;
