import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import isMobileSlice from "./isMobileSlice";
import tooltipSlice from "./tooltipSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    isMobile: isMobileSlice,
    tooltip: tooltipSlice,
  },
});

export default store;
