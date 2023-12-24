import { ReactElement } from "react";
import homeIcon from "@icons/home.svg";
import movieIcon from "@icons/movie.svg";
import tvIcon from "@icons/tv.svg";
import startStrokeIcon from "@icons/star-stroke.svg";

type MenuItem = {
  path: string;
  icon: ReactElement;
};

export const sidebarMenuItems: MenuItem[] = [
  {
    path: "/",
    icon: <img src={homeIcon} alt="Home icon" />,
  },
  {
    path: "/movies",
    icon: <img src={movieIcon} alt="Movie icon" />,
  },
  {
    path: "/tvs",
    icon: <img src={tvIcon} alt="TV icon" />,
  },
  {
    path: "/starred",
    icon: <img src={startStrokeIcon} alt="Starred icon" />,
  },
];
