import Logo from "./Logo";
import Search from "./Search";
function Header() {
  return (
    <header className="py-8 flex flex-col items-center md:flex-row">
      <div className="mb-6">
        <Logo className="w-[6.5rem] fill-custom_accent" />
      </div>
      <div className="flex flex-1 w-full">
        <Search />
      </div>
    </header>
  );
}

export default Header;
