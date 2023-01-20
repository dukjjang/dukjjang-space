import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="relative text-black dark:text-white text-xl  md:text-3xl font-bold">
        <span className="dark:text-[#C3FA07]">D</span>uk
        <span className="dark:text-[#C3FA07]">jj</span>a
        <span className="dark:text-[#C3FA07]">n</span>g
        <div className="dark:invisible"></div>
      </span>
    </Link>
  );
};

export default Logo;
