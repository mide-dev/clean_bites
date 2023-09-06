import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "@/Components/Footer";

function Layout() {
  return (
    // site-wrapper
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
