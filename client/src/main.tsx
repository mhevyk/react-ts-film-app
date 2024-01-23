import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "@theme/theme";
import { GlobalStyles } from "./theme/global";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const modalContainer = document.createElement("div");
modalContainer.id = "modal-container";
document.body.append(modalContainer);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
