import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { MainPage } from "@pages/MainPage";
import { RootLayout } from "@layouts/RootLayout";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
