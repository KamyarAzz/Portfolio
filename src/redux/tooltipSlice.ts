import {createSlice} from "@reduxjs/toolkit";
import {TTooltip} from "@/lib/type";

const initialState: TTooltip = {
  isVisible: false,
  text: "",
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    setTooltip: (_, action) => {
      return action.payload;
    },
  },
});

export const {setTooltip} = tooltipSlice.actions;

export default tooltipSlice.reducer;
