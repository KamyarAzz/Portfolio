import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const isMobile = createSlice({
  name: "isMobile",
  initialState,
  reducers: {
    setIsMobile: (_, action) => {
      return action.payload;
    },
  },
});

export const { setIsMobile } = isMobile.actions;

export default isMobile.reducer;
