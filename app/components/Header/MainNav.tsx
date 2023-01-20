"use client";
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle";

const MainNav = () => {
  return (
    <nav className=" gap-8 font-normal text-[14px] ml-auto flex items-center text-black dark:text-white justify-center">
      <Link href="/writing">
        <span>Writing</span>
      </Link>
      <Link href="/contact">
        <span>Contact</span>
      </Link>
      <DarkModeToggleButton />
    </nav>
  );
};

export default MainNav;
