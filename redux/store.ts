import { configureStore } from "@reduxjs/toolkit";
import viewportSlice from "./slices/viewportSlice";
import sidebarSlice from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    viewport: viewportSlice,
  },
});

export default store;
