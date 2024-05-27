import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionState {
  length: number;
}

const initialState: SectionState = {
  length: 0,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSectionLength: (state, action: PayloadAction<SectionState>) => {
      state.length = action.payload.length;
    },
  },
});

export const { setSectionLength } = sectionSlice.actions;

export const sectionReducer = sectionSlice.reducer;
