import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
