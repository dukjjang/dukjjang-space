import { motion } from "framer-motion";
import { memo } from "react";

const Star = ({ x, y }: { x: number; y: number }) => {
  return (
    <motion.div
      initial={{ x: x, y: y, opacity: 0 }}
      animate={{ x: x, y: y, opacity: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration: 10,
        delay: Number((Math.random() * 10).toFixed(0)),
      }}
      key={crypto.randomUUID()}
      className={` max-sm:-z-50 absolute w-1 h-1 rounded-full bg-white   `}
    />
  );
};

export default memo(Star);
