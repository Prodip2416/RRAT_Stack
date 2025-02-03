import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import uiReducer from '../features/ui/uiSlice'; 

const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: userReducer, 

  },
});

export default store;
