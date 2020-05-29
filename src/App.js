import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { PAGE_PROFILE, PAGE_HELP } from "./features/navigation/index";

import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Sidebar from "./components/Sidebar";

const routes = {
  [PAGE_PROFILE]: Profile,
  [PAGE_HELP]: Help,
};

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.navigation.page);

  const currentComponent = routes[currentPage];

  if (!currentComponent) {
    return `404 error ... ${currentPage} not found in\n${JSON.stringify(routes, null, 2)}`;
  }

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>

        <header className="main-header">This is the page header</header>
        <main className="main-content">
          <div className="App">
            <Counter />
          </div>
          {React.createElement(currentComponent)}
        </main>

        <footer className="main-footer">&copy; 2020 IDEX</footer>
      </div>
    </>
  );
}

export default App;
