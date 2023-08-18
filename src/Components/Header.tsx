import Logo from "./Logo";
import Search from "./Search";
function Header() {
  return (
    <header className="my-8 md:my-12 flex flex-col items-center md:flex-row md:justify-between gap-x-8 ">
      <Logo className="w-[6.5rem] fill-custom_accent mb-6 md:mb-0" />
      <Search className="w-full" />
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
}

export default Header;
