import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import StudentApp from "./StudentApp.tsx";
import RContainer from "./r/RContainer.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RContainer />
    {/* <App /> */}
  </StrictMode>
);
