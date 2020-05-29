import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../features/i18n";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setLanguage("en"))}>en</button>
      <button onClick={() => dispatch(setLanguage("cz"))}>cz</button>
    </div>
  );
}
