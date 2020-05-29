import { useSelector } from "react-redux";

const { createSlice } = require("@reduxjs/toolkit");

const keys = {
  en: {
    // This is less than ideal, but running out of time
    ["pages.profile"]: "Profile",
    ["pages.help"]: "Help",
    ["help.title"]: "Contact us",
    ["help.description"]: "Some description",
    ["help.placeholder"]: "Some placeholder",
    ["help.button"]: "Send",
  },
  cz: {},
};

function makeLookup(language) {
  return key => {
    return keys[language][key] || `Missing translation "${language}.${key}", see i18n.js`;
  };
}

export function useI18n() {
  const language = useSelector(s => s.i18n.language);
  return makeLookup(language);
}

const i18n = createSlice({
  name: "i18n",
  initialState: {
    language: "en",
  },
  reducers: {
    setLanguage(state, { payload: language }) {
      if (!keys[language]) {
        throw new Error(`Invalid language ${language}, not found in ${Object.keys(keys)}`);
      }
      return {
        language,
      };
    },
  },
});

export const { setLanguage } = i18n.actions;

export default i18n.reducer;
