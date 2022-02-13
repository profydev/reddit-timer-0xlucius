import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/bitter";
import "@fontsource/montserrat";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #93918f;
  }
`;

const Root = () => (
  <>
    <GlobalStyle />
    <Normalize />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="search" element={} />
      </Routes>
    </BrowserRouter>
  </>
);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root />, document.getElementById("root"));
