"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ThemeToggleButton from "./ThemeToggleButton";
import Waves from "../Waves";
import Logo from "../Logo";
import Wizard from "/public/images/Wizard.png";
import Broom from "public/images/Broom.png";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import UnderLine from "../UnderLine";
import { useTheme } from "next-themes";

const Header = () => {
  const pathName = usePathname().slice(1);
  const isHomePage = pathName.length < 1;
  const wizardRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);
  const cloneBoxRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const scrollDirection = useScrollDirection();
  const broomRef = useRef<HTMLImageElement>(null);
  const { theme } = useTheme();

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

  const { position, onDrags, onTouches } = useDragAndDrop({
    wizardRef,
    cloneBoxRef,
    broomRef,
  });

  const headerSlideAnimation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <motion.header
      id="header"
      ref={wrapperRef}
      {...headerSlideAnimation}
      className={`relative opacity-1 backdrop-blur-sm z-50 top-0 left-0 w-full transition-transform duration-500 ease-in-out
        ${!isHomePage && "sticky"} ${pathName.match("studio") && "hidden"} ${
        isHomePage
          ? " bg-primary transition-colors duration-1000"
          : "bg-primary"
      } ${scrolling && scrollDirection === "down" && "-translate-y-24"}`}
    >
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ display: "hidden" }}
        className=" text-background mx-auto flex py-5 px-5 md:px-20 lg:px-64 w-full items-center"
      >
        <Link href="/" scroll={false}>
          <Logo />
        </Link>
        <div className="-z-20 relative ml-10 lg:ml-36 flex justify-center items-center ">
          <motion.div
            animate={{ translateY: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`sun will-change-transform w-10 h-10 ${
              isHomePage && "md:w-12 md:h-12"
            } rounded-full absolute dark:hidden -top-8`}
          />
          <motion.div
            animate={{ translateY: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`moon will-change-transform w-10 h-10 ${
              isHomePage && "md:w-12 md:h-12"
            } rounded-full absolute  dark:block hidden -top-20 dark:-top-8`}
          />
        </div>

        <nav
          id="nav"
          className="text-background h-14 gap-3 md:gap-8 font-normal text-[16px] ml-auto 
          flex items-center justify-center"
        >
          <div
            id={"wizard-icon"}
            ref={wizardRef}
            className={`peer z-20 ${pathName !== "writing" && "hidden"}`}
            draggable
            {...onTouches}
            {...onDrags}
          >
            <Image
              id="wizard"
              width={45}
              height={45}
              alt="magic stick"
              src={Wizard}
            />
          </div>
          <div
            id={"broom-icon"}
            ref={broomRef}
            className={`peer z-20 ${pathName !== "writing" && "hidden"}`}
            draggable
            {...onTouches}
            {...onDrags}
          >
            <Image id="broom" width={40} height={40} alt="broom" src={Broom} />
          </div>
          <div
            id={"clone-box"}
            ref={cloneBoxRef}
            style={{ top: position.y, left: position.x }}
            className="absolute hidden opacity-80 w-20 h-20 z-20"
            draggable
          />
          <div className="flex relative items-center gap-2">
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
          </div>
          <ThemeToggleButton />
        </nav>
      </motion.div>
      <Waves />
    </motion.header>
  );
};

export default Header;
