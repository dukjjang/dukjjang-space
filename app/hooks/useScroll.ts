import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolling, setScrolling] = useState<Boolean>(false);
  const [scrollY, setScrollY] = useState<Number>(0);
  const [direction, setDirection] = useState<"down" | "up" | null>();

  const handleScroll = (e: Event): void => {
    if (window.scrollY > window.innerHeight || window.scrollY < 0) return;
    setScrolling(true);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setScrolling(false);
    setDirection(null);
    setScrollY(0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (typeof window === undefined) return;

    const checkDirection = setInterval(() => {
      if (scrollY > window.scrollY) setDirection("up");
      if (scrollY < window.scrollY) setDirection("down");
    }, 200);

    const checkScroll = setInterval(() => {
      if (scrollY === window.scrollY) {
        setScrolling(false);
      }
      clearInterval(checkScroll);
      clearInterval(checkDirection);
    }, 200);
  }, [scrollY]);

  return { scrolling, direction };
};
