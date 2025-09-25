"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathName = usePathname()?.slice(1) || "";
  const headerRef = useRef<HTMLElement>(null);
  const wavesRef = useRef<HTMLElement>(null);
  const [showSideTaps, setShowSideTaps] = useState(false);

  const { scrolling } = useScroll();

  const LINKS = [
    { id: 0, name: "Writing", path: "writing" },
    { id: 1, name: "Contact", path: "contact" },
  ];

  const styleAccordingToPage = (pathName: string) => {
    const isHome = !pathName;
    const isWriting = pathName.match("writing");
    const isStudio = pathName.match("studio");
    const isContact = pathName.match("contact");

    if (isHome) return "block bg-primary relative";
    if (isWriting || isContact) return "fixed bg-background";
    if (isStudio) return "hidden";
  };

  return (
    <header
      id="header"
      ref={headerRef}
      className={`${styleAccordingToPage(
        pathName
      )} z-50 top-0 w-full transition-[transform,opacity] 
        duration-700 ease-in-out ${
          pathName.match("writing") && scrolling
            ? "-translate-y-32 opacity-0 shadow-md "
            : "translate-y-0 opacity-100"
        }   `}
    >
      {!pathName && <Stars />}
      <NavWrapper>
        <Link href="/" aria-label="home">
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
    </header>
  );
};

export default Header;
