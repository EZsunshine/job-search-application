import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  jobs: localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem('jobs')) : [],
  total: 0,
};

const favoriteJob = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addJobs(state, action) {
      state.jobs.push(action.payload);
      state.total++;
    //   toast.info("Job saved", {
    //     position: "bottom-left",
    //   });
      localStorage.setItem("jobs", JSON.stringify(state.jobs));
    },
    removeJobs(state, action) {
      state.jobs.map((job) => {
        if (job.id === action.payload.id) {
          const newJobs = state.jobs.filter((item) => item.id !== job.id);
          state.jobs = newJobs;
          state.total--;
        //   toast.error("Job removed", {
        //     position: "bottom-left",
        //   });
        }
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
        return state;
      });
    },
  },
});

export const { addJobs, removeJobs } = favoriteJob.actions;

export default favoriteJob.reducer;
