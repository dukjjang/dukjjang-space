import { motion } from "framer-motion";

const Star = ({ x, y }: { x: number; y: number }) => {
  return (
    <motion.div
      initial={{ x: x, y: y }}
      animate={{ x: x, y: y, opacity: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration: 10,
        delay: Number((Math.random() * 10).toFixed(0)),
      }}
      key={crypto.randomUUID()}
      className={` z-30 absolute w-1 h-1 rounded-full bg-white transition-transform duration-300  `}
    />
  );
};

export default Star;
