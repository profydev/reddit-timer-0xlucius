import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import "@fontsource/bitter";
import "@fontsource/montserrat";
import App from "./App";

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root />, document.getElementById("root"));
