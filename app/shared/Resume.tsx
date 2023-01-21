"use client";

import { motion } from "framer-motion";
import UnderLine from "./UnderLine";

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 1 }}
      className=" ts-color w-full px-5 lg:px-56 bg-white h-[1000px] dark:bg-[#0E141B] "
    >
      <h1 className=" text-[30px] w-fit  dark:text-neutral-200 md:text-4xl lg:text-6xl font-bold ">
        안녕하세요,{" "}
        <span className="relative z-20">
          진현덕 <UnderLine />
        </span>
        입니다
        <span className="text-[#C3FA07] dark:text-blue-500">.</span>
      </h1>
    </motion.section>
  );
};

export default Resume;
