import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navigation from "../features/navigation/index";
import i18n from "../features/i18n";

export default configureStore({
  reducer: {
    counter: counterReducer,
    navigation,
    i18n,
  },
});
