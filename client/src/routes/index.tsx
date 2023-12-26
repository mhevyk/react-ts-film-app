import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { MainPage } from "@pages/MainPage";
import { RootLayout } from "@layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MainPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);
