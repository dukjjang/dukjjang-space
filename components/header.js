import Link from "next/link";
import Image from "next/image";
import github from "../public/github-icon.png";
import DarkModeToggleButton from "./home/dark-mode-toggle";
export default function Header() {
  return (
    <>
      <header className=" text-black bg-gradient-to-b dark:from-[#0E141B] dark:to-[#192129] from-[#a8dcfe] to-[#CAE4F5] ">
        <div className="container mx-auto flex flex-wrap p-10 px-40 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <Link href="/">
              <span className=" text-[#4333FF] text-3xl font-bold">
                Jin Hyunduk
              </span>
            </Link>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-black dark:text-white justify-center">
            <Link href="/">
              <span className="mr-10 hover:text-gray-900">RESUME</span>
            </Link>
            <Link href="/projects">
              <span className="mr-10 hover:text-gray-900">Project</span>
            </Link>
            <Link href="/about-me">
              <span className="mr-10 hover:text-gray-900">Contact</span>
            </Link>
            <Link href={"https://github.com/dukjjang"}>
              <Image className="w-9 h-9 mr-10" src={github} alt="github" />
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
