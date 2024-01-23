import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  //TODO: uncomment sidebar
  return (
    <>
      {/* <Sidebar /> */}
      <Outlet />
    </>
  );
}
