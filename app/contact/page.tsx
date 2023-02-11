import Link from "next/link";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import UnderLine from "../../ui/UnderLine";

const Contact = () => {
  return (
    <main className="h-screen flex flex-col w-full pt-48 md:pt-64 gap-5  px-5 lg:px-56 ">
      <h1 className="relative text-5xl md:text-7xl mx-auto w-fit h-fit tracking-wider ">
        Contact <UnderLine />
      </h1>
      <p className="mx-auto text-xl py-4 border-b">jhd7292@gmail.com</p>
      <nav className="mx-auto flex gap-8 [&>a:hover]:text-black [&>a:hover:]darktext-white">
        <Link href="https://github.com/dukjjang">
          <AiFillGithub size={25} className="" />
        </Link>
        <Link href="https://www.instagram.com/dukjjang">
          <AiOutlineInstagram size={25} />
        </Link>
        <Link href="https://dukjjang.notion.site/Resume-082657b78bbe408ea9e4bc94fd7a93a0">
          <FiUser size={25} />
        </Link>
      </nav>
    </main>
  );
};

export default Contact;
