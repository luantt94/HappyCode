import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../component/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
