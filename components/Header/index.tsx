"use client";

import Link from "next/link";
import Logo from "../Logo";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" ts-color  top-0 w-full bg-primary backdrop-blur-sm z-50 "
    >
      <div className=" mx-auto flex py-8 px-5 md:px-64 w-full items-center">
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
      <Waves />
    </motion.header>
  );
};
export default Header;
