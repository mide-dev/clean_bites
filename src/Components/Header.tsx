import { Link, NavLink } from "react-router-dom";
import { HTMLAttributes } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";
import Divider from "./Divider";

function Header({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
  return (
    <>
    <header
      className={`container py-4 md:py-6 flex flex-col items-center md:flex-row md:justify-between 
      gap-x-8 ${className}`}
      {...props}
    >
      <Link to="/">
        <Logo className="hidden sm:block w-[5rem] md:w-[6rem] fill-custom_accent mb-6 md:mb-0" />
      </Link>
      <Search className="w-full lg:max-w-[50%]" />
      <div className="relative flex items-center justify-between gap-x-8">
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-x-8 font-poppins text-sm font-medium text-custom_primary_200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "is-active nav-hover" : "nav-hover"
              }
            >
              Places
            </NavLink>
            <NavLink
              to="top-picks"
              className={({ isActive }) =>
                isActive
                  ? "hidden lg:inline-block nav-hover is-active nav-hover"
                  : "hidden lg:inline-block nav-hover nav-hover"
              }
            >
              Top Picks
            </NavLink>
            <NavLink
              to="why-us"
              className={({ isActive }) =>
                isActive ? "is-active nav-hover" : "nav-hover"
              }
            >
              Why us
            </NavLink>
          </ul>
        </nav>
        <Account />
      </div>
    </header>
    <Divider axis='horizontal'/>
    </>
  );
}

export default Header;
