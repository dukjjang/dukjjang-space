"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";

const Header = () => {
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

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
        <nav className=" text-background gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              className="md:p-2 rounded"
              href={`/${link.path}`}
            >
              <h6 className="relative">
                {link.name}
                {pathName === link.path && <UnderLine />}
              </h6>
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>
      </div>
      {isHomePage && <Waves />}
    </motion.header>
  );
};
export default Header;
