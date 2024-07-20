import { createSlice } from "@reduxjs/toolkit";

export interface NavState {
  open: boolean;
}
const initialState: NavState = {
  open: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setNavOpen } = navSlice.actions;

export const navReducer = navSlice.reducer;
