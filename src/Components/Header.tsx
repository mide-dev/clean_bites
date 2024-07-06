import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";

function Header({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
  return (
    <>
      <header
        className={`container py-4 md:py-6 flex flex-col items-center sm:flex-row md:justify-between 
      gap-x-8 ${className}`}
        {...props}
      >
        <Link to="/">
          <Logo className="hidden sm:block w-[5rem] md:w-[6rem] fill-custom_accent mb-6 md:mb-0" />
        </Link>
        <SearchBar className="w-full md:max-w-[50%]" />
        <div className="relative flex items-center justify-between gap-x-8">
          <Account />
        </div>
      </header>
    </>
  );
}

export default Header;
