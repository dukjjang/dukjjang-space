"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";
import Wizard from "/public/images/wizard.svg";

import { useRef, useState } from "react";
import useTouch from "../Hooks/useTouch";

const Header = () => {
  const [grab, setGrab] = useState(false);
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;
  const dragRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const { onTouchStart, onTouchMove, onTouchEnd, position } = useTouch({
    dragRef,
    wrapperRef,
  });

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  const handleDragStart = (e) => {
    setGrab(true);
  };

  const handleDragEnd = () => {
    setGrab(false);
  };

  return (
    <motion.header
      id="header"
      ref={wrapperRef}
      {...animation}
      className={`${!isHomePage && "sticky"} top-0 w-full ${
        isHomePage ? "bg-primary ts-color" : "bg-transparent"
      } backdrop-blur-sm z-50  `}
    >
      <div className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav
          id="nav"
          className=" text-background h-14  gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center"
        >
          <Image
            style={{ top: position.y, left: position.x }}
            ref={dragRef}
            id={"wizard"}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            draggable
            width={35}
            height={35}
            alt="magic stick"
            src={Wizard}
            className={` peer ${pathName !== "writing" && "hidden"}    `}
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
      <Waves />
    </motion.header>
  );
};

export default Header;
