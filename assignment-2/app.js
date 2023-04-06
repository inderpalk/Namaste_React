import React from "react";
import ReactDOM from "react-dom/client";

// using React.createElement improrted from react library
// works like: React.createElement => Object => Html(DOM)
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    key: "head",
  },
  "Namaste React"
);

// using JSX heading tag
// works like: JSX => React.createElement => Object => Html(DOM)
const heading2 = (
  <h1 title="heading" key="main heading">
    Namaste React
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
