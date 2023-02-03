"use client";

import { useTheme } from "next-themes";
import useSound from "use-sound";
import { CiCloudMoon } from "react-icons/ci";
import { useSettingSound } from "../app/shard/SoundContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [sound] = useSettingSound();
  const [play] = useSound("/sounds/bulb.mp3", { volume: 0.5 });

  const onClick = () => {
    sound === true && play();
    setTheme(theme === "system" || theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-all ease-in-out group md:active:translate-y-3 inline-flex 
      items-center border-0 p-1 rounded text-orange-400 dark:text-[#FFDC85]
        md:hover:scale-150 text-blue dark:hover:text-yellow-500 relative z-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="dark:hidden block w-7 h-7  "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 
          18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
          12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <CiCloudMoon className="hidden dark:block" size={30} />
    </button>
  );
};

export default ThemeToggleButton;
