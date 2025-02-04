import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../features/users/userSlice";
import { filterUsersByName } from "../../features/users/userLogic";

const Analysis = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  // filter user by name
  const filteredUsers = filterUsersByName(users, "John");
  console.log(filteredUsers);
  
  return (
    <div>
      <h1>User List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading users.</p>}
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Analysis;
