import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
} from "./userAPI";

// Async actions with redux-thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetchUsersAPI();
  return response.data; // Assumes API returns `{ data: [...] }`
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const response = await createUserAPI(user);
  return response.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, user }) => {
    const response = await updateUserAPI(id, user);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await deleteUserAPI(id);
  return id; // Return the deleted user's ID
});

// Slice definition
const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [], // User list
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // Store errors here
  },
  reducers: {}, // Reducer logic for synchronous actions
  extraReducers: (builder) => {
    builder
      // Handle fetchUsers
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle createUser
      .addCase(createUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      // Handle updateUser
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index >= 0) {
          state.list[index] = action.payload;
        }
      })
      // Handle deleteUser
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
