const { createSlice } = require("@reduxjs/toolkit");

export const PAGE_PROFILE = "/profile";
export const PAGE_HELP = "/help";

const navigation = createSlice({
  name: "navigation",
  initialState: {
    page: PAGE_PROFILE,
  },

  reducers: {
    gotoProfile: () => ({ page: PAGE_PROFILE }),
    gotoHelp: () => ({ page: PAGE_HELP }),
  },
});

export const { gotoProfile, gotoHelp } = navigation.actions;

export default navigation.reducer;
