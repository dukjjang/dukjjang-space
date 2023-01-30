"use client";

import { motion } from "framer-motion";
import UnderLine from "./UnderLine";

const Resume = () => {
  return (
    <section className=" w-full px-5 lg:px-56 bg-white dark:bg-[#0E141B] h-[1000px] ">
      <div>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1
            className="text-[24px] w-fit mb-10 text-black dark:text-neutral-200 
            md:text-4xl lg:text-6xl font-bold"
          >
            안녕하세요,
            <span className="relative w-fit z-20">
              진현덕 <UnderLine />
            </span>
            입니다
            <span className="text-[#C3FA07] dark:text-blue-500">.</span>
          </h1>
          <h2
            className="text-black dark:text-neutral-200 relative w-fit 
            mb-4 font-bold text-2xl"
          >
            Introduce
            <UnderLine />
          </h2>
          <div className="text-primary max-w-4xl text-md md:text-lg">
            <p className="inline">
              멋진 개발자를 꿈꾸며 뜨겁게 성장하고 있는 신입 개발자입니다.
              상상을 현실로 만드는 것을 좋아합니다. 호기심이 많아 새로운 기술을
              학습하고 적용하는 것을 좋아하며,{" "}
            </p>
            <span className="relative w-fit">
              <p className="inline-block">적응력과 개발속도가 빠른 편입니다</p>
              <UnderLine />
            </span>
            <p className="inline">
              . 확장성과 유지보수성이 높은 코드를 지향하며 리팩토링과 클린코드,
              디자인 패턴에 관심이 많습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
