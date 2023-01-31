"use client";

import { usePathname } from "next/navigation";
import { RefObject } from "react";

const Waves = ({ wavesRef }: { wavesRef: RefObject<HTMLElement> }) => {
  const isHomePage = usePathname() === "/";
  return (
    <section ref={wavesRef}>
      <svg
        className={`md:h-[150px] h-[100px] max-h-[200px]  bg-primary  ;
         w-full ${!isHomePage && "hidden"}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox={`0 0 1440 320`}
      >
        <path
          className={`  fill-white dark:fill-[#0E141B] ${
            !isHomePage ? "bg-transparent" : " bg-primary"
          }  `}
          d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,144C672,139,768,85,864,80C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Waves;
