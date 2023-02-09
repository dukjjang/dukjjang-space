"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolling, setScrolling] = useState<Boolean>(false);
  const [scrollY, setScrollY] = useState<Number>(0);
  const [direction, setDirection] = useState<"down" | "up" | null>();

  const handleScroll = (e: Event): void => {
    if (window.scrollY < 200) {
      setScrolling(false);
      setDirection(null);
      return;
    }

    if (window.scrollY === 0) {
      setScrollY(0);
      setScrolling(false);
      setDirection(null);
      return;
    }
    if (window.scrollY === window.innerHeight) {
      setScrollY(window.innerHeight);
      setScrolling(false);
      setDirection(null);
      return;
    }

    setScrolling(true);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (typeof window === undefined) return;

    const checkDirection = setInterval(() => {
      if (scrollY > window.scrollY) setDirection("up");
      if (scrollY < window.scrollY) setDirection("down");
      else setDirection(null);
    }, 400);

    const checkScroll = setInterval(() => {
      if (scrollY === window.scrollY) {
        setScrolling(false);
      }
      clearInterval(checkScroll);
      clearInterval(checkDirection);
    }, 500);
  }, [scrollY, scrolling, direction]);

  return { scrolling, direction, scrollY };
};
