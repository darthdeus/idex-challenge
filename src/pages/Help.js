import React from "react";
import { useI18n } from "../features/i18n";

export default function Help() {
  const i18n = useI18n();
  return (
    <div>
      <h1>{i18n("help.title")}</h1>
      <p>{i18n("help.description")}</p>

      <form>
        <textarea name="message" placeholder={i18n("help.placeholder")} />
        <button>{i18n("help.button")}</button>
      </form>
    </div>
  );
}
