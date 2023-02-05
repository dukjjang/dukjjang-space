"use client";

import { motion, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSpring } from "framer-motion";
import { useRef } from "react";
import { useSettingSound } from "../app/shard/SoundContext";
import useSound from "use-sound";

type Props = {
  showSideTaps: boolean;
  sunOrMoon: "sun" | "moon";
};

const SunMoon = ({ showSideTaps, sunOrMoon }: Props) => {
  const isHomePage = usePathname().length < 1;
  const sunMoonRef = useRef<HTMLDivElement>(null);
  const [sound] = useSettingSound();
  const [playPull] = useSound("/sounds/pull.mp3", { volume: 0.6 });
  const [playShoot] = useSound("/sounds/shoot.mp3", { volume: 0.4 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useSpring(x, { stiffness: 0, damping: 0 });
  useSpring(y, { stiffness: 0, damping: 0 });

  return (
    <motion.div
      ref={sunMoonRef}
      onDragStart={() => sound === true && playPull()}
      onDragEnd={() => sound === true && playShoot()}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      animate={{
        translateY: [0, 10, 0],
      }}
      style={{ x, y }}
      transition={{ repeat: showSideTaps ? 0 : Infinity, duration: 3 }}
      className={` ${sunOrMoon} ${
        sunOrMoon === "sun" ? "block dark:hidden" : "hidden dark:block"
      } cursor-pointer z-50 will-change-transform w-10 h-10 ${
        isHomePage && "md:w-12 md:h-12"
      } rounded-full absolute top-0 left-0  `}
    />
  );
};

export default SunMoon;
