import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Form from "./components/Form";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;

// ReactDOM.render(
//   <React.StrictMode>
//     <Form />
//   </React.StrictMode>,
//   document.getElementById("container")
// );
