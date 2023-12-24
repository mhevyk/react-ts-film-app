import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
