import Link from "next/link";
import Image from "next/image";
import github from "../public/github-icon.png";
import DarkModeToggleButton from "./home/dark-mode-toggle";
import MainTitle from "./mainTitle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full text-black bg-transparent backdrop-blur-sm z-50 ">
      <div className="container mx-auto flex md:p-10 md:px-40 items-center">
        <div className="flex title-font font-medium justify-center items-center text-black md:mb-4 mb-0">
          <MainTitle />{" "}
        </div>
        <nav className=" text-xs  md:text-xl  md:ml-auto flex items-center text-black dark:text-white justify-center">
          <Link href="/">
            <span className="md:mr-10 hover:text-gray-900">RESUME</span>
          </Link>
          <Link href="/projects">
            <span className="md:mr-10 hover:text-gray-900">Project</span>
          </Link>
          <Link href="/about-me">
            <span className="md:mr-10 hover:text-gray-900">Contact</span>
          </Link>
          <Link href={"https://github.com/dukjjang"}>
            <Image
              className="w-5 h-5 md:w-9 md:h-9 md:mr-10"
              src={github}
              alt="github"
            />
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
