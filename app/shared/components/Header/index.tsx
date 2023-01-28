"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import UnderLine from "../UnderLine";
import Wizard from "/public/images/Wizard.png";

import { useEffect, useRef, useState } from "react";
import useTouch from "../../hooks/useTouch";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const Header = () => {
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;
  const dragRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);
  const cloneRef = useRef<HTMLElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolling(true);
    });

    createScrollStopListener(
      window,
      function () {
        setScrolling(false);
      },
      300
    );
  }, []);

  function createScrollStopListener(
    element: any,
    callback: () => void,
    timeout: number
  ) {
    let handle = null;
    let onScroll = function () {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200);
    };
    element.addEventListener("scroll", onScroll);
    return function () {
      element.removeEventListener("scroll", onScroll);
    };
  }

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const { x, y } = useTouch({
    dragRef,
    cloneRef,
    wrapperRef,
  });

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <motion.header
      id="header"
      ref={wrapperRef}
      {...animation}
      className={`opacity-1 backdrop-blur-sm  z-50 top-0 left-0 w-full transition-transform duration-500 ease-in-out
        ${!isHomePage && "sticky"} ${pathName.match("studio") && "hidden"} ${
        isHomePage ? " bg-primary ts-color" : "bg-transparent"
      } ${scrolling && scrollDirection === "down" && "-translate-y-24"} `}
    >
      <div className="text-background mx-auto flex py-5 px-5 md:px-20 lg:px-64 w-full items-center">
        <Link href="/" scroll={false}>
          <Logo />
        </Link>
        <nav
          id="nav"
          className="text-background h-14 gap-3 md:gap-8 font-normal text-[16px] ml-auto 
          flex items-center justify-center"
        >
          <i
            id={"wizard-wrapper"}
            ref={dragRef}
            draggable
            className={`peer z-10 ${pathName !== "writing" && "hidden"}`}
          >
            <Image
              id="wizard"
              width={50}
              height={50}
              alt="magic stick"
              src={Wizard}
            />
          </i>
          <i
            id={"clone-wizard"}
            ref={cloneRef}
            style={{ top: y, left: x }}
            draggable
            className="absolute hidden opacity-80 w-20 h-20 z-0"
          />
          {LINKS.map((link) => (
            <Link
              key={link.id}
              className="md:p-2 rounded"
              href={`/${link.path}`}
              scroll={false}
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
