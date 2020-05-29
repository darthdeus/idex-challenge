import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import logo from "./app_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { gotoProfile, gotoHelp, PAGE_PROFILE, PAGE_HELP } from "./features/navigation/index";

import Profile from "./pages/Profile";
import Help from "./pages/Help";

const routes = {
  [PAGE_PROFILE]: Profile,
  [PAGE_HELP]: Help,
};

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.navigation.page);

  const currentComponent = routes[currentPage];

  if (!currentComponent) {
    debugger;
    return `404 error ... ${currentPage} not found in\n${JSON.stringify(routes, null, 2)}`;
  }

  return (
    <>
      <div className="container">
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

        <div className="main">
          <header></header>
          <main>{React.createElement(currentComponent)}</main>
        </div>

        <div className="App">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
