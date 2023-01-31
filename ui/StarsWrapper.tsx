import { usePathname } from "next/navigation";
import { RefObject, useEffect, useState } from "react";
import Star from "./Star";

const StarsWrapper = ({ headerRef }: { headerRef: RefObject<HTMLElement> }) => {
  const pathName = usePathname();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from(new Array(20), (_) => {
        return {
          x: (Math.random() * headerRef.current.offsetWidth).toFixed(0),
          y: pathName.match("writing")
            ? (Math.random() * document.body.offsetHeight).toFixed(0)
            : ((Math.random() * headerRef.current.offsetHeight) / 2).toFixed(0),
        };
      })
    );
  }, [headerRef.current?.offsetWidth]);

  return (
    <div className=" hidden dark:block absolute left-0 top-0 right-0 h-full w-full bg-transparent">
      {stars.map((star) => (
        <Star key={crypto.randomUUID()} x={Number(star.x)} y={Number(star.y)} />
      ))}
    </div>
  );
};

export default StarsWrapper;
