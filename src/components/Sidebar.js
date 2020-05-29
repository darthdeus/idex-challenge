import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../app_logo.png";
import { gotoProfile, gotoHelp, PAGE_HELP, PAGE_PROFILE } from "../features/navigation";

export default function Sidebar() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.navigation.page);

  return (
    <div className="sidebar">
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
              Profile
            </button>
          </li>
          <li>
            <button
              className={currentPage === PAGE_HELP ? "active" : ""}
              href="#"
              onClick={() => dispatch(gotoHelp())}
            >
              Help
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
