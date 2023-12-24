import accountIcon from "@icons/account.svg";
import setingsIcon from "@icons/settings.svg";
import { MenuItem } from "@layouts/components/Menu";

export const navbarMenuItems: MenuItem[] = [
  {
    path: "/account",
    icon: <img src={accountIcon} alt="User icon" />,
  },
  {
    path: "/settings",
    icon: <img src={setingsIcon} alt="Settings icon" />,
  },
];
