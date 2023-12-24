import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import ContextProvider from "./contexts/GlobalContext";
import App from "./App";
import Router from "./routes/Router";


const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
  
font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
}

`;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ContextProvider>
);