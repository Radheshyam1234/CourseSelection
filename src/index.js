import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CoursesDataProvider } from "./Context/CoursesDataContext/CoursesDataProvider";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoursesDataProvider>
      <App />
    </CoursesDataProvider>
  </React.StrictMode>
);
