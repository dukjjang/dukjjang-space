import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative text-slate-800 dark:text-white text-xl  md:text-3xl font-bold">
        <span className="mr-2">👨🏻‍💻</span>
        <span className="dark:text-[#C3FA07] ">D</span>uk
        <span className="dark:text-[#C3FA07] ">jj</span>a
        <span className="dark:text-[#C3FA07] ">n</span>g
      </div>
    </Link>
  );
};

export default Logo;
