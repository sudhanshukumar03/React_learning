import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    //add more slice for posts, comments, etc. if needed in the future
  },
});

export default store;