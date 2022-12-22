import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <span className="text-black dark:text-white text-xl  md:text-2xl font-bold">
        <span className="text-red-400">J</span>in{" "}
        <span className="relative">
          <span className="text-red-400">H</span>yun
          <span className="text-red-400">D</span>uk
        </span>
      </span>
    </Link>
  );
};

export default Logo;
