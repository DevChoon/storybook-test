import { createSlice } from "@reduxjs/toolkit";

const initNavState = {
  value: "home",
};

export const selectNavigation = createSlice({
  name: "selectNavigation",
  initialState: initNavState,
  reducers: {
    onChangeNavigation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { onChangeNavigation } = selectNavigation.actions;

export default selectNavigation.reducer;
