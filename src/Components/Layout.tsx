import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="site-wrapper container">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
