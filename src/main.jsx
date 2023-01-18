import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
