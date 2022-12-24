import { useTheme } from "next-themes";
import Link from "next/link";
import UnderLine from "../UnderLine";

const Logo = () => {
  return (
    <Link href="/">
      <span className="relative text-black dark:text-white text-xl  md:text-2xl font-bold">
        <span className="dark:text-[#C3FA07]">J</span>in{" "}
        <span className="relative">
          <span className="dark:text-[#C3FA07]">H</span>yun
          <span className="dark:text-[#C3FA07]">D</span>uk
        </span>
        <div className="dark:invisible"></div>
      </span>
    </Link>
  );
};

export default Logo;
