import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { config } from "./msalConfig";

const pca = new PublicClientApplication(config);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
