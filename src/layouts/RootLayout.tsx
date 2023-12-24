import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <p>Root layout</p>
      <Outlet />
    </>
  );
}
