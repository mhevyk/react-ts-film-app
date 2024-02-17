import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
