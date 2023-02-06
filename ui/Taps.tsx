"use client";
import Link from "next/link";
import useSound from "use-sound";
import { useSettingSound } from "../app/shard/SoundContext";
import UnderLine from "./UnderLine";

type Props = {
  pathName: string;
  LINKS: { id: number; name: string; path: string }[];
};

const Taps = ({ pathName, LINKS }: Props) => {
  const [sound] = useSettingSound();
  const [playClick] = useSound("/sounds/click.mp3", {
    volume: sound === true ? 0.8 : 0,
  });

  return (
    <div
      className={`hidden md:flex text-slate-900 dark:text-slate-100 relative items-center gap-2`}
    >
      {LINKS.map((link) => (
        <Link
          key={link.id}
          onClick={() => playClick()}
          className="md:p-2 rounded"
          href={`/${link.path}`}
        >
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
