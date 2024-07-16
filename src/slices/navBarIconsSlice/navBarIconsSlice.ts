import { NavBarIconsEnums } from "@/enums/navBarIconEnums";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavBarIconsState {
  icon: NavBarIconsEnums | null;
}

const initialState: NavBarIconsState = {
  icon: null,
};

export const navBarIconsSlice = createSlice({
  name: "navBarIcon",
  initialState,
  reducers: {
    setNavBarIcons: (state, action: PayloadAction<NavBarIconsState>) => {
      state.icon = action.payload.icon;
    },
  },
});

export const { setNavBarIcons } = navBarIconsSlice.actions;

export const navBarIconsReducer = navBarIconsSlice.reducer;
