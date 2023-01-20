"use client";

import Link from "next/link";
import Logo from "../Logo";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="fixed top-0 w-full text-black  backdrop-blur-sm z-50 ">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 15 }}
        transition={{ delay: 0.15 }}
        className=" mx-auto flex py-8 px-5 max-w-6xl items-center"
      >
        <Logo />
        <nav className=" gap-3 md:gap-8 font-normal text-[14px] ml-auto flex items-center  justify-center">
          <Link href="/writing">
            <h6>Writing</h6>
          </Link>
          <Link href="/contact">
            <h6>Contact</h6>
          </Link>
          <ThemeToggleButton />
        </nav>
      </motion.div>
    </header>
  );
};
export default Header;
