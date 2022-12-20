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
        <div className=" bg-[#CAE4F5]  dark:bg-[#1B242D] h-20"></div>
        <svg
          preserveAspectRatio="none"
          className={`min-h-[420px] bg-[${
            theme === "dark" ? "#1B242D" : "#CAE4F5"
          }]`}
          fill="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={theme === "dark" ? `#0E141B` : "white"}
            fill-opacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,229.3C384,192,480,128,576,101.3C672,75,768,85,864,90.7C960,96,1056,96,1152,112C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
};

export default Waves;
