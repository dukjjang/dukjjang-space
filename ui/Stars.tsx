"use client";

import { usePathname } from "next/navigation";
import { memo, RefObject, useEffect, useState } from "react";
import { useWindowSize } from "../app/hooks/useWindowSize";
import Star from "./Star";

const StarsWrapper = ({ parentRef }: { parentRef: RefObject<HTMLElement> }) => {
  const pathName = usePathname();
  const [stars, setStars] = useState([]);

  const { windowSize } = useWindowSize();

  useEffect(() => {
    const writingPage = document.getElementById("writing");

    setStars(
      Array.from(new Array(20), (_) => {
        return {
          x: (Math.random() * writingPage.offsetWidth).toFixed(0),
          y: (Math.random() * writingPage.offsetHeight).toFixed(0),
        };
      })
    );
  }, [pathName]);

  return (
    <div className=" z-0 hidden dark:block absolute left-0 top-0 right-0 h-full w-full bg-transparent">
      {stars.map((star) => (
        <Star key={crypto.randomUUID()} x={Number(star.x)} y={Number(star.y)} />
      ))}
    </div>
  );
};

export default memo(StarsWrapper);
