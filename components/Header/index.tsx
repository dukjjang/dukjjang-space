"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";

const Header = () => {
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <motion.header
      {...animation}
      className={` ts-color top-0 w-full ${
        isHomePage ? "bg-primary" : "bg-background"
      } backdrop-blur-sm z-50 `}
    >
      <div className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav className=" gap-3 md:gap-8 font-normal text-[14px] ml-auto flex items-center justify-center">
          <Link
            className="md:p-2 rounded gradient bg-growing-underline"
            href="/writing"
          >
            <h6>Writing</h6>
          </Link>
          <Link
            className="md:p-2 rounded gradient bg-growing-underline"
            href="/contact"
          >
            <h6>Contact</h6>
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
      {isHomePage && <Waves />}
    </motion.header>
  );
};
export default Header;
