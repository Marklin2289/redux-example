import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userSlice from "../user/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
});
