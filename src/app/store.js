import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navigation from "../features/navigation/index";

export default configureStore({
  reducer: {
    counter: counterReducer,
    navigation,
  },
});
