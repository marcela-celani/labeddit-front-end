import React from "react";
import ReactDOM from "react-dom/client";

import { createGlobalStyle } from "styled-components";
import ContextProvider from "./contexts/GlobalContext";
import App from "./App";


const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
  
font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #5d5d5d;
}

`;

//font-family: 'Noto Sans', sans-serif;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ContextProvider>
);