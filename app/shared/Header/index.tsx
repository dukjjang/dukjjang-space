import Logo from "../Logo";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="fixed top-0 w-full text-black bg-transparent z-50 ">
      <div className="bg-[#0AF4EC] dark:bg-[#00df9a] h-3" />
      <div className=" mx-auto flex py-8 px-5  max-w-6xl items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
export default Header;
