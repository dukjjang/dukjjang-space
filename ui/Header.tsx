"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import Waves from "./Waves";
import Logo from "./Logo";
import SideTaps from "./SideTaps";
import SunMoon from "./SunMoon";
import Nav from "./Nav";
import SunMoonWrapper from "./SunMoonWrapper";
import NavWrapper from "./NavWrapper";
import Stars from "./Stars";
import { useScroll } from "../app/hooks/useScroll";

const Header = () => {
  const pathName = usePathname().slice(1);
  const headerRef = useRef<HTMLElement>(null);
  const wavesRef = useRef<HTMLElement>(null);
  const [showSideTaps, setShowSideTaps] = useState(false);
  const { scrolling, direction } = useScroll();

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
      ref={headerRef}
      {...headerSlideAnimation}
      className={`z-20 top-0 w-full relative backdrop-blur-[1px]
      transition-[transform,opacity] duration-1000 ease-in-out   
        ${pathName.match("writing") && "fixed shadow-sm bg-opacity-50"} ${
        pathName.match("studio") && "hidden"
      } ${!pathName ? " bg-primary " : "bg-transparent"} ${
        pathName.match("writing") && scrolling
          ? "-translate-y-32 opacity-0 "
          : "translate-y-0 opacity-100"
      }   `}
    >
      {!pathName && <Stars />}
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
      <Waves wavesRef={wavesRef} />
    </motion.header>
  );
};

export default Header;
