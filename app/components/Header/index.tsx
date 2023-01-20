import Logo from "../Logo";
import MainNav from "./MainNav";
const Header = () => {
  return (
    <header className="fixed top-0 w-full text-black bg-transparent z-50 ">
      <div className="bg-[#0AF4EC] dark:bg-[#00df9a] h-3" />
      <div className=" mx-auto flex py-8 px-5  max-w-6xl items-center">
        <Logo />
        <MainNav />
      </div>
    </header>
  );
};
export default Header;
