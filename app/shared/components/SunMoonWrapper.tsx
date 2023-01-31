import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  showSideTaps: boolean;
};

const SunMoonWrapper = ({ children, showSideTaps }: Props) => {
  const isHomePage = usePathname().match("/");
  return (
    <div
      className={`relative ml-10 lg:ml-36 flex justify-center items-center 
             ${isHomePage ? "block" : "hidden"}`}
    >
      <motion.div
        className="z-30"
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
