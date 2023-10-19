import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: Boolean(true),
  reducers: {
    changeSidebar(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
