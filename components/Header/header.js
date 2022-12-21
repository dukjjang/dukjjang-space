import Link from "next/link";
import Image from "next/image";
import DarkModeToggleButton from "../home/dark-mode-toggle";
import Logo from "../Logo";

const Header = () => {
  const links = [
    { name: "RESUME", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="fixed top-0 w-full text-black bg-transparent z-50 ">
      <div className=" mx-auto flex py-8 px-5  md:px-20 lg:px-40 items-center">
        <Logo />
        <nav className=" gap-5 font-normal  text-[15px]  ml-auto flex items-center text-black dark:text-white justify-center">
          <Link href="/">
            <span>Resume</span>
          </Link>
          <Link href="/projects">
            <span>Project</span>
          </Link>
          <Link href="/about-me">
            <span>Contact</span>
          </Link>
          <DarkModeToggleButton />
        </nav>
      </div>
    </header>
  );
};
export default Header;
