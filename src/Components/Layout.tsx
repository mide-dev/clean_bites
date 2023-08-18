import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    // site-wrapper
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
