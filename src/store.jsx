import { configureStore } from "@reduxjs/toolkit";
import resumeReducers from "./features/resume/resumeSlice";

export default configureStore({
  reducer: {
    resume: resumeReducers,
  },
});
