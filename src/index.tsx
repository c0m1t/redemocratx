import * as React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// @ts-ignore
ReactDOM.unstable_createRoot(
  document.getElementById("root") as HTMLElement
).render(<App />);
