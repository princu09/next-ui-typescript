import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileView: false,
};

const viewportSlice = createSlice({
  name: 'viewport',

  initialState,

  reducers: {
    setMobileView: (state, action) => {
      state.isMobileView = action.payload;
    },
  },
});

export const { setMobileView } = viewportSlice.actions;

export default viewportSlice.reducer;
