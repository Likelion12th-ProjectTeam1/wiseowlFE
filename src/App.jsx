import { useState, useEffect, useRef } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import routes from './routes';
import Mobile from './Moblie';
import GlobalStyle from './globalstyle';
import Navigatebar from "./component/Navigatebar";


function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Mobile />}
          >
          {elements}
        </Route>
      </Routes>
      <Navigatebar/>
    </Router>
    </>
  );
}

export default App;