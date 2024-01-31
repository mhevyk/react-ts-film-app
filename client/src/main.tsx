import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "@theme/theme";
import { GlobalStyles } from "./theme/global";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const modalContainer = document.createElement("div");
modalContainer.id = "modal-container";
document.body.append(modalContainer);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(router)} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
