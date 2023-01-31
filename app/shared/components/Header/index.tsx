"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Waves from "../Waves";
import Logo from "../Logo";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import SideTaps from "../SideTaps";
import SunMoon from "../SunMoon";
import Nav from "../Nav";
import SunMoonWrapper from "../SunMoonWrapper";
import NavWrapper from "../NavWrapper";

const Header = () => {
  const pathName = usePathname().slice(1);
  const wrapperRef = useRef<HTMLHeadingElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const scrollDirection = useScrollDirection();
  const [showSideTaps, setShowSideTaps] = useState(false);

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

  const headerSlideAnimation = pathName.length < 1 && {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <motion.header
      id="header"
      ref={wrapperRef}
      {...headerSlideAnimation}
      className={` z-50 relative opacity-1 backdrop-blur-sm  top-0 left-0 w-full 
        ${pathName.match("writing") && "sticky"} ${
        pathName.match("studio") && "hidden"
      } ${!pathName ? " bg-primary " : "bg-background"} ${
        scrolling && scrollDirection === "down" && "-translate-y-24"
      }
`}
    >
      <NavWrapper>
        <Link href="/" scroll={false}>
          <Logo />
        </Link>
        <SunMoonWrapper showSideTaps={showSideTaps}>
          <SunMoon showSideTaps={showSideTaps} sunOrMoon={"sun"} />
          <SunMoon showSideTaps={showSideTaps} sunOrMoon={"moon"} />
        </SunMoonWrapper>

        <Nav
          showSideTaps={showSideTaps}
          setShowSideTaps={setShowSideTaps}
          LINKS={LINKS}
        />
        <SideTaps LINKS={LINKS} showSlideMenu={showSideTaps} />
      </NavWrapper>

      <Waves />
    </motion.header>
  );
};

export default Header;
