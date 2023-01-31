import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  showSideTaps: boolean;
  sunOrMoon: "sun" | "moon";
};

const SunMoon = ({ showSideTaps, sunOrMoon }: Props) => {
  const isHomePage = usePathname().length < 1;

  return (
    <motion.div
      animate={{
        translateY: [0, 10, 0],
      }}
      transition={{ repeat: showSideTaps ? 0 : Infinity, duration: 3 }}
      className={` ${sunOrMoon} ${
        sunOrMoon === "sun" ? "block dark:hidden" : "hidden dark:block"
      } cursor-pointer z-30 will-change-transform w-10 h-10 ${
        isHomePage && "md:w-12 md:h-12"
      } rounded-full absolute top-0 left-0 `}
    />
  );
};

export default SunMoon;
