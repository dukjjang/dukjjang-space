"use client";
import Link from "next/link";
import ThemeToggleButton from "./themeToggle";

const Nav = () => {
  return (
    <nav className=" gap-3 md:gap-8 font-normal text-[14px] ml-auto flex items-center text-black dark:text-white justify-center">
      <Link href="/writing">
        <span>Writing</span>
      </Link>
      <Link href="/contact">
        <span>Contact</span>
      </Link>
      <ThemeToggleButton />
    </nav>
  );
};

export default Nav;
