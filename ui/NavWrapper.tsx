import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ display: "hidden" }}
      className={`text-background mx-auto flex  px-5 md:px-20 
      lg:px-64 w-full items-center ${
        pathName.match("writing") ? "py-4" : "py-8"
      } `}
    >
      {children}
    </motion.div>
  );
};

export default NavWrapper;
