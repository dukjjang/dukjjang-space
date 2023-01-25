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
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [grab, setGrab] = useState(false);
  const pathName = usePathname().slice(1);
  const [isDragging, setIsDragging] = useState(false);
  const isHomePage = pathName.length < 1;
  const [scrollY, setScrollY] = useState(0);
  const [targetId, setTargetId] = useState("-1");
  const [position, setPosition] = useState({
    x: 0,
    dx: 0,
    y: 0,
    dy: 0,
  });
  const dragRef = useRef<HTMLImageElement>(null);
  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const animation = isHomePage && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  useEffect(() => {
    window.scroll(0, 0);

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  const handleDragStart = (e) => {
    setGrab(true);
  };

  const handleTouchMove = (e) => {
    if (e.cancelable) e.preventDefault();
    const touch = e.touches[0];
    if (e.cancelable) e.preventDefault();

    if (
      touch.pageX < 0 + dragRef.current!.offsetWidth / 2 ||
      touch.pageX + dragRef.current!.offsetWidth / 2 > window.screen.width
    ) {
      return;
    }
    if (
      touch.pageY < position.dy - scrollY ||
      touch.pageY - scrollY + dragRef.current.offsetHeight / 2 >
        window.screen.height
    ) {
      return;
    }

    setPosition({
      ...position,
      x: touch.pageX - dragRef.current!.offsetWidth / 2,
      y: touch.pageY - scrollY - dragRef.current!.offsetHeight / 2,
    });

    const target = document.elementFromPoint(
      position.x + dragRef.current!.offsetWidth,
      position.y + dragRef.current!.offsetHeight - 5
    );

    if (target) {
      const targetParentNode = target.closest("ul > li");
      if (targetParentNode) {
        setTargetId(targetParentNode.id);
        targetParentNode.classList.add("opacity-20");
      }
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    document.body.style.overflow = "hidden";
    setPosition({
      x: dragRef.current!.offsetLeft,
      y: dragRef.current!.offsetTop,
      dx: dragRef.current!.offsetLeft,
      dy: dragRef.current!.offsetTop,
    });

    dragRef.current!.style.position = "absolute";

    console.log("터치");
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setGrab(false);

    setPosition({ ...position, y: position.dy, x: position.dx });
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");

    window.removeEventListener("touchmove", handleTouchMove);
  };

  return (
    <motion.header
      {...animation}
      className={`${!isHomePage && "sticky"} top-0 w-full ${
        isHomePage ? "bg-primary ts-color" : "bg-transparent"
      } backdrop-blur-sm  z-50  `}
    >
      <div className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center">
        <Logo />
        <nav className=" text-background h-14 gap-3 md:gap-8 font-normal text-[16px] ml-auto flex items-center justify-center">
          <Image
            style={{ top: position.y, left: position.x }}
            ref={dragRef}
            id={"wizard"}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            draggable
            width={35}
            height={35}
            alt="magic stick"
            src={Wizard}
            className={`overflow-y-scroll  peer ${
              pathName !== "writing" && "hidden"
            }    `}
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
