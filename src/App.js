import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { PAGE_PROFILE, PAGE_HELP } from "./features/navigation/index";

import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const routes = {
  [PAGE_PROFILE]: Profile,
  [PAGE_HELP]: Help,
};

function App() {
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

        <header className="main-header">
          <Header />
        </header>
        <main className="main-content">{React.createElement(currentComponent)}</main>

        <footer className="main-footer">&copy; 2020 IDEX</footer>
      </div>
    </>
  );
}

export default App;
