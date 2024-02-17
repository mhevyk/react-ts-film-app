import { RouteObject } from "react-router-dom";
import { ErrorPage } from "@pages/ErrorPage";
import { MainPage } from "@pages/MainPage";
import { Suspense } from "react";
import { lazyImport } from "@utils/lazyImport";
import { SearchPage } from "@pages/SearchPage";
import { HeroLayout } from "@layouts/HeroLayout";
import { StickyNavbarLayout } from "@layouts/StickyNavbarLayout";
import { RootLayout } from "@layouts/RootLayout";
import { BackdropSlider } from "@pages/MainPage/components/BackdropSlider";

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
        element: <HeroLayout HeroComponent={<BackdropSlider />} />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
      {
        element: <StickyNavbarLayout />,
        children: [
          {
            path: "search",
            element: <SearchPage />,
          },
          {
            path: "movies",
            element: <h1>Page1</h1>,
          },
          {
            path: "tvs",
            element: <h1>Page2</h1>,
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
