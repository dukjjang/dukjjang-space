"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1
        className="font-extrabold text-transparent dark:text-transparent text-[24px] md:text-4xl
        bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 dark:from-green-300 dark:to-blue-600"
      >
        Dukjjang
      </h1>
    </Link>
  );
};

export default Logo;
