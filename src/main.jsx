// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App 컴포넌트 가져오기
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
