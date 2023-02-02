import { motion } from "framer-motion";

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ display: "hidden" }}
      className=" text-background mx-auto flex py-8 px-5 md:px-20 lg:px-64 w-full items-center"
    >
      {children}
    </motion.div>
  );
};

export default NavWrapper;
