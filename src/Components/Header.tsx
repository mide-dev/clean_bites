import { Link } from "react-router-dom";

import Logo from "./Logo";
import Search from "./Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "../assets/profile.svg";
import hamburger from "../assets/hamburger.svg";

function Header() {
  return (
    <header className="my-8 md:my-12 flex flex-col items-center md:flex-row md:justify-between gap-x-8 ">
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
        <div className="hidden md:flex gap-x-2 cursor-pointer py-2 px-2 rounded-full border-[1px] border-custom_primary_100">
          <img src={hamburger} alt="menu" className="w-5" />
          <Avatar className=" w-6 h-6">
            <AvatarImage src="" />
            <AvatarFallback>
              <img src={profile} alt="account" className="w-full" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
