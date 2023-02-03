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

const Header = () => {
  const pathName = usePathname().slice(1);
  const headerRef = useRef<HTMLElement>(null);
  const wavesRef = useRef<HTMLElement>(null);
  const [showSideTaps, setShowSideTaps] = useState(false);

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
      className={`z-20  top-0   
        ${pathName.match("writing") && "sticky shadow-sm"} ${
        pathName.match("studio") && "hidden"
      } ${!pathName ? " bg-primary " : "bg-background"} relative border-none `}
    >
      <Stars parentRef={headerRef} />
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
