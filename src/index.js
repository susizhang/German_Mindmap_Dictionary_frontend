import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/Theme";
import { AuthContextProvider } from "./context/AuthContext";
import { SavedWordProvider } from "./context/SavedWordContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <SavedWordProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SavedWordProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
