import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";


window.App = {
  start: (options: { dealers: string[] }) => {
    console.log("App started with dealers:", options.dealers);
  }
};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
window.App = { start: () => { console.log("App started"); } }; 
