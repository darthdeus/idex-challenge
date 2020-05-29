import { configureStore } from "@reduxjs/toolkit";
import navigation from "../features/navigation/index";
import i18n from "../features/i18n";

export default configureStore({
  reducer: {
    navigation,
    i18n,
  },
});
