function UserDetails({ user }) {
  const clearSelection = () => {
    // Logic to clear selected user details
  };

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
      <button onClick={() => clearSelection()}>Clear Selection</button>
    </div>
  );
}

export default UserDetails;
