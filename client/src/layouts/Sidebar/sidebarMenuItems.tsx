import homeIcon from "@icons/home.svg";
import movieIcon from "@icons/movie.svg";
import tvIcon from "@icons/tv.svg";
import startStrokeIcon from "@icons/star-stroke.svg";
import { MenuItemBase } from "@components/ui/Menu";
import { ReactElement } from "react";

type SidebarMenuItem = MenuItemBase & {
  icon: ReactElement;
  label: string;
};

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    path: "/",
    icon: <img src={homeIcon} alt="Home icon" />,
    label: "Home",
  },
  {
    path: "/movies",
    icon: <img src={movieIcon} alt="Movie icon" />,
    label: "Movies",
  },
  {
    path: "/tvs",
    icon: <img src={tvIcon} alt="TV icon" />,
    label: "TV",
  },
  {
    path: "/starred",
    icon: <img src={startStrokeIcon} alt="Starred icon" />,
    label: "Starred",
  },
];
