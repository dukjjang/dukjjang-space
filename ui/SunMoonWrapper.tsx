"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  showSideTaps: boolean;
};

const SunMoonWrapper = ({ children, showSideTaps }: Props) => {
  const pathName = usePathname().slice(1);
  return (
    <div
      className={`relative ml-10 lg:ml-36 flex justify-center items-center 
             ${!!pathName ? "hidden" : "block"}`}
    >
      <motion.div
        className="z-50"
        animate={{
          translateY: showSideTaps ? 20 : 0,
          translateX: showSideTaps ? 70 : 0,
        }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SunMoonWrapper;
