import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../app_logo.png";
import { gotoProfile, gotoHelp, PAGE_HELP, PAGE_PROFILE } from "../features/navigation";

// not doing this as a module to save time
import "./Sidebar.css";
import { useI18n } from "../features/i18n";

export default function Sidebar() {
  const dispatch = useDispatch();
  const i18n = useI18n();

  const currentPage = useSelector(state => state.navigation.page);

  return (
    <>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            {/* using <button> instead of <a> for accessiblity reasons
                (we don't do pushstate routing, so we can't provide a reasonable URL) */}
            <button
              className={currentPage === PAGE_PROFILE ? "active" : ""}
              href="#"
              onClick={() => dispatch(gotoProfile())}
            >
              {i18n("pages.profile")}
            </button>
          </li>
          <li>
            <button
              className={currentPage === PAGE_HELP ? "active" : ""}
              href="#"
              onClick={() => dispatch(gotoHelp())}
            >
              {i18n("pages.help")}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
