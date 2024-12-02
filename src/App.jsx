import { useState, useEffect, useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import Mobile from "./Moblie";
import GlobalStyle from "./globalstyle";
import Navigatebar from "./component/Navigatebar";

import { useLocation } from "react-router-dom";

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  const location = useLocation();
  const noNavbarPaths = [
    "/",
    "/googleLogin",
    "/agree",
    "/info",
    "/infotwo",
    "/depthrequire",
    "/subjectmodal",
    "/subjectmodal2",
    "/request",
    "/requestaccept",
    "/editcoursemodal1",
  ]; // Navbar를 표시하지 않을 경로

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Mobile />}>
            {elements}
          </Route>
        </Routes>
        {!noNavbarPaths.includes(location.pathname) && <Navigatebar />}
      </Router>
    </>
  );
}

export default App;
