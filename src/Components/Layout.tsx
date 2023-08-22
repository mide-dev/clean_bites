import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    // site-wrapper
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
