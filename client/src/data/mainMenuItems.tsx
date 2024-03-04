import HomeIcon from "@icons/home.svg?react";
import MovieIcon from "@icons/movie.svg?react";
import TVIcon from "@icons/tv.svg?react";
import StarStrokeIcon from "@icons/star-stroke.svg?react";
import { ReactElement } from "react";

type MainMenuItem = {
  path: string;
  icon: ReactElement;
  label: string;
};

export const mainMenuItems: MainMenuItem[] = [
  {
    path: "/",
    icon: <HomeIcon color="white" />,
    label: "Home",
  },
  {
    path: "/movies",
    icon: <MovieIcon color="white" />,
    label: "Movies",
  },
  {
    path: "/tvs",
    icon: <TVIcon color="white" />,
    label: "TV",
  },
  {
    path: "/starred",
    icon: <StarStrokeIcon color="white" />,
    label: "Starred",
  },
];
