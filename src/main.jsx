import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./components/Provider.tsx";
import LandingPage from "./pages/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <LandingPage />
    </Provider>
  </React.StrictMode>
);
