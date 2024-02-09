import { RouteObject } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { MainPage } from "@pages/MainPage";
import { RootLayout } from "@layouts/RootLayout";
import { Suspense } from "react";
import { lazyImport } from "@utils/lazyImport";

const NotFoundPage = lazyImport(
  () => import("@pages/NotFoundPage"),
  "NotFoundPage"
);

const router: RouteObject[] = [
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
  {
    path: "*",
    element: (
      <Suspense>
        <NotFoundPage />
      </Suspense>
    ),
  },
];

export default router;
