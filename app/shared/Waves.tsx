"use client";

import { motion } from "framer-motion";
const Waves = () => {
  return (
    <motion.section className="ts-color">
      <svg
        preserveAspectRatio="none"
        className={` ts-color fill-white dark:fill-[#0E141B] bg-[#CAE4F5] max-h-[200px] w-full h-[100px] md:h-[150px] dark:bg-[#070707] `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 1440 320`}
      >
        <path
          fillOpacity="1"
          d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,144C672,139,768,85,864,80C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </motion.section>
  );
};

export default Waves;
