import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");

const Root = () => {
  return <App />;
};

ReactDom.render(<Root />, root);
