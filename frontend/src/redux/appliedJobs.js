import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applied: localStorage.getItem("applied")
    ? JSON.parse(localStorage.getItem("applied"))
    : [],
  total: 0,
};

const appliedJobs = createSlice({
  name: "applied",
  initialState,
  reducers: {
    addApply(state, action) {
      state.applied.push(action.payload);
      state.total++;

      localStorage.setItem("applied", JSON.stringify(state.applied));
    },
  },
});

export const { addApply } = appliedJobs.actions;

export default appliedJobs.reducer;
