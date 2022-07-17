import React, { StrictMode } from "react";
import { render } from "react-dom";

import Main from "./components/templates/Main";

render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
