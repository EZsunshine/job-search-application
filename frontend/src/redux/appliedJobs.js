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
    removeApply(state, action) {
      state.applied.map((apply) => {
        if (apply.id === action.payload.id) {
          let newApplied = state.applied.filter(
            (item) => item.id !== apply.id
          );
          state.applied = newApplied;
          state.total--;
        }
        
        localStorage.setItem("applied", JSON.stringify(state.applied));
        return state;
      });
    },
  },
});

export const { addApply, removeApply } = appliedJobs.actions;

export default appliedJobs.reducer;
