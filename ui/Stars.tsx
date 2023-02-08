"use client";

import { usePathname } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../app/hooks/useWindowSize";
import Star from "./Star";

const StarsWrapper = () => {
  const pathName = usePathname();
  const [stars, setStars] = useState([]);
  const starsRef = useRef<HTMLDivElement>(null);
  const parentElement = starsRef.current?.parentElement;

  const { windowSize } = useWindowSize();

  useEffect(() => {
    setStars(
      Array.from(new Array(30), (_) => {
        return {
          x: Number((Math.random() * parentElement?.offsetWidth).toFixed(0)),
          y: pathName.match("writing")
            ? Number((Math.random() * parentElement?.offsetHeight).toFixed(0))
            : Number(
                ((Math.random() * parentElement?.offsetHeight) / 2).toFixed(0)
              ),
        };
      })
    );
  }, [parentElement]);

  return (
    <div
      ref={starsRef}
      className=" hidden dark:block absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-transparent"
    >
      {stars.map((star) => (
        <Star key={crypto.randomUUID()} x={Number(star.x)} y={Number(star.y)} />
      ))}
    </div>
  );
};

export default memo(StarsWrapper);
