import Link from "next/link";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer
      className="p-6 bg-background shadow-sm text-black/50 dark:text-white/50 
      text-sm px-5 lg:px-64 md:px-20 flex justify-between "
    >
      <h1 className="text-gradient">ⓒ 2023 Dukjjang</h1>
      <nav className="flex gap-8 [&>a:hover]:text-black [&>a:hover:]darktext-white">
        <Link aria-label="github link" href="https://github.com/dukjjang">
          <AiFillGithub size={25} className="" />
        </Link>
        <Link
          aria-label="instagram link"
          href="https://www.instagram.com/dukjjang"
        >
          <AiOutlineInstagram size={25} />
        </Link>
      </nav>
    </footer>
  );
}
