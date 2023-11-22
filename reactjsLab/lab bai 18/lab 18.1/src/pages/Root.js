import { Outlet } from "react-router-dom";
import Header from "../component/header";
function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
