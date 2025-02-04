import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import uiReducer from '../features/ui/uiSlice'; 
import authReducer from '../features/auth/authSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    users: userReducer, 
  },
});

export default store;
