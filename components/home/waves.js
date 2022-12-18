import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Waves = () => {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  if (loaded)
    return (
      <div className="w-full">
        <div className=" bg-[#CAE4F5] dark:bg-[#192129] h-24"></div>
        <svg
          className={`bg-[${
            theme === "dark" ? "#192129" : "#CAE4F5"
          }] w-full h-[320px]`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={theme === "dark" ? "#0E141B" : "white"}
            d="M0,256L48,224C96,192,192,128,288,117.3C384,107,480,149,576,144C672,139,768,85,864,80C960,75,1056,117,1152,149.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
};

export default Waves;
