"use client";

import { motion } from "framer-motion";
import UnderLine from "./UnderLine";

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className=" ts-color w-full px-5 lg:px-56 bg-white h-[1000px] dark:bg-[#0E141B] "
    >
      <h1 className=" text-[24px] w-fit mb-10 dark:text-neutral-200 md:text-4xl lg:text-6xl font-bold  ">
        안녕하세요,{" "}
        <span className="relative w-fit z-20">
          진현덕 <UnderLine />
        </span>
        입니다
        <span className="text-[#C3FA07] dark:text-blue-500">.</span>
      </h1>
      <h2 className="relative w-fit mb-4 font-bold text-2xl">
        Introduce
        <UnderLine />
      </h2>
      <div className="max-w-4xl text-md md:text-lg">
        <p>
          실력있는 개발자를 꿈꾸며 성장하고 있는 신입 개발자입니다. 상상을
          현실로 만드는 것을 좋아합니다. 호기심이 많아 새로운 기술을 학습하고
          적용하는 것을 좋아하며,{" "}
        </p>
        <span className="relative w-fit">
          <h6 className="inline-block"> 적응력과 개발속도가 빠른 편입니다</h6>
          <UnderLine />
        </span>
        <p>
          . 확장성과 유지보수성이 높은 코드를 지향하며 리팩토링과 클린코드,
          디자인 패턴에 관심이 많습니다. 견고하고 완성도 높은 프로그램은
          타입언어와 테스트에서 만들어진다고 생각하여, 주로 타입스크립트를
          사용하고 꼼꼼하게 테스트코드를 작성합니다.
        </p>{" "}
      </div>
    </motion.section>
  );
};

export default Resume;
