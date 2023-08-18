import { Link } from "react-router-dom";

import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";

function Header() {
  return (
    <header className="my-8 md:my-6 flex flex-col items-center md:flex-row md:justify-between gap-x-8 ">
      <Link to="/">
        <Logo className="w-[6.5rem] fill-custom_accent mb-6 md:mb-0" />
      </Link>
      <Search className="w-full lg:max-w-[50%]" />
      <div className="flex items-center justify-between gap-x-8">
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-x-8">
            <Link to="/">Restaurants</Link>
            <Link to="top-picks" className="hidden lg:inline-block">
              Top Picks
            </Link>
            <Link to="why-us">Why us</Link>
          </ul>
        </nav>
        <Account />
      </div>
    </header>
  );
}

export default Header;
