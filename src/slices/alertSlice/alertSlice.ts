import { FlashType } from "@/enums/flashEnums";
import { AlertState } from "@/types/flashTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AlertState = {
  open: false,
  message: "",
  severity: FlashType.SUCCESS,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeAlert: (state) => {
      state.open = false;
    },
  },
});

export const { setAlert, closeAlert } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;
