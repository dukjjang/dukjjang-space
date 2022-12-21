import Link from "next/link";
import UnderLine from "../UnderLine";
const Logo = () => {
  return (
    <Link href="/">
      <span className="text-black dark:text-white text-xl  md:text-2xl font-bold">
        Jin <span className="relative">Hyunduk</span>
      </span>
    </Link>
  );
};

export default Logo;
