"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UnderLine from "./UnderLine";

type Props = {
  LINKS: { id: number; name: string; path: string }[];
  showSlideMenu: boolean;
};

const SideTaps = ({ LINKS, showSlideMenu }: Props) => {
  const pathName = usePathname().slice(1);
  return (
    <div
      className={`${showSlideMenu === true ? "scale-100" : "scale-0"} ${
        !pathName ? "bg-primary" : "bg-background"
      } p-5 md:hidden flex flex-col w-full absolute top-0 right-0  
       z-30 transition-transform duration-500 ease-in-out`}
    >
      <ul className=" flex items-end justify-center  ">
        {LINKS.map((link) => (
          <li key={link.id} className="p-3 ">
            <Link
              className="md:p-2 rounded relative"
              href={`/${link.path}`}
              scroll={false}
            >
              {link.name}
              {pathName.match(link.path) && <UnderLine />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideTaps;
