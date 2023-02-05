"use client";
import Link from "next/link";
import UnderLine from "./UnderLine";

type Props = {
  pathName: string;
  LINKS: { id: number; name: string; path: string }[];
};

const Taps = ({ pathName, LINKS }: Props) => {
  return (
    <div className={`hidden md:flex relative items-center gap-2`}>
      {LINKS.map((link) => (
        <Link key={link.id} className="md:p-2 rounded" href={`/${link.path}`}>
          <h6 className="relative">
            {link.name}
            {pathName.match(link.path) && <UnderLine />}
          </h6>
        </Link>
      ))}
    </div>
  );
};

export default Taps;
