import { createUser, fetchUsers } from "./userSlice";

export const filterUsersByName = (users, name) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const createUserAndFetch = (user) => async (dispatch) => {
  await dispatch(createUser(user));
  dispatch(fetchUsers());
};
