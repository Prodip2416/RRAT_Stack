import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Export actions
export const { toggleTheme } = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;
