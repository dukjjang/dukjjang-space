"use client";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const SkeletonBlogList = () => {
  return (
    <ul
      className="w-full h-full gap-y-6 grid grid-cols-1 md:grid-cols-2   
      md:px-16 md:gap-x-8 md:gap-y-14 md:pb-24 md:h-fit md:py-10 box-border
      overflow-hidden"
    >
      {Array.from(new Array(6), (_, idx) => {
        return (
          <li
            key={idx}
            className="relative bg-white overflow-hidden shadow-xl 
            dark:bg-[#222222] md:rounded-lg w-full h-[250px]"
          >
            <div
              className="absolute bg-gray-100 dark:bg-zinc-800 shadow-xl h-[500px] w-8 blur-lg"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SkeletonBlogList;
