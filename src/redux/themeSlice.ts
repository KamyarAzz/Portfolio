import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const initialState: Theme = "dark";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, action) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
