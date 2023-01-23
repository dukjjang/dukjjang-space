"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";
import Wizard from "/public/images/wizard.svg";
import { useState } from "react";

const Header = () => {
  const [grab, setGrab] = useState(false);
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

  const handleDragStart = (e) => {
    setGrab(true);
  };

  const handleDragEnter = (e) => {
    console.log(e.target);
  };

  return (
    <motion.header
      {...animation}
      className={`${pathName === "writing" && "sticky"}   top-0 w-full ${
        isHomePage ? "bg-primary ts-color" : "bg-transparent"
      } backdrop-blur-lg z-50  `}
    >
      <div className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav className=" text-background gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center">
          <Image
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={() => setGrab(false)}
            draggable
            width={35}
            height={35}
            alt="magic stick"
            src={Wizard}
            className={`${
              grab === true ? "cursor-grabbing" : "cursor-pointer"
            } active:scale-150`}
          />
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
