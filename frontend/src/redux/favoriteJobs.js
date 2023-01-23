import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: localStorage.getItem("jobs")
    ? JSON.parse(localStorage.getItem("jobs"))
    : [],
  total: 0,
};

const favoriteJob = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addJobs(state, action) {
      state.jobs.push(action.payload);

      const unique = [...new Map(state.jobs.map((job) => [job.id, job])).values()];

      state.jobs = unique;
      state.total = unique.length;
      localStorage.setItem("jobs", JSON.stringify(state.jobs));
    },
    removeJobs(state, action) {
      state.jobs.map((job) => {
        if (job.id === action.payload.id) {
          let newJobs = state.jobs.filter((item) => item.id !== job.id);
          state.jobs = newJobs;
          state.total--;
        }
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
        return state;
      });
    },
  },
});

export const { addJobs, removeJobs } = favoriteJob.actions;

export default favoriteJob.reducer;
