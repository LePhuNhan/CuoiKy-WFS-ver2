import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ApiStateProvider from "./Components/ApiStateProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiStateProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ApiStateProvider>
  </React.StrictMode>
);
