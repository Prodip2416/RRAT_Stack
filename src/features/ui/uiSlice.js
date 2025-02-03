import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "light", 
    color: "#000000", // Default color
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload; // Update theme
    },
    setColor: (state, action) => {
      state.color = action.payload; // Update color
    },
    resetUI: (state) => {
      // Reset to initial state
      state.theme = "light";
      state.color = "#000000";
    },
  },
});

// Export actions
export const { setTheme, setColor, resetUI } = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;
