import { Outlet, ScrollRestoration } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
