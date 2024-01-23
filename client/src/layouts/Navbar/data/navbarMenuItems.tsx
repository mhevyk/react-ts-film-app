import { MenuItemBase } from "@components/ui/Menu";
import accountIcon from "@icons/account.svg";
import setingsIcon from "@icons/settings.svg";
import { ReactElement } from "react";

type NavbarMenuItem = MenuItemBase & {
  icon: ReactElement;
};

export const navbarMenuItems: NavbarMenuItem[] = [
  {
    path: "/account",
    icon: <img src={accountIcon} alt="User icon" />,
  },
  {
    path: "/settings",
    icon: <img src={setingsIcon} alt="Settings icon" />,
  },
];
