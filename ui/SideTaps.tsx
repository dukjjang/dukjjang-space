import Link from "next/link";
import { usePathname } from "next/navigation";
import UnderLine from "./UnderLine";

type Props = {
  LINKS: { id: number; name: string; path: string }[];
  showSlideMenu: boolean;
};

const SideTaps = ({ LINKS, showSlideMenu }: Props) => {
  const pathName = usePathname().slice(1);
  return (
    <div
      className={`${showSlideMenu === true ? "scale-100" : "scale-0"} ${
        pathName.match("writing") ? "bg-white dark:bg-[#151E27]" : "bg-primary"
      } p-5 md:hidden flex flex-col w-full absolute top-0 right-0 
        transition-transform duration-500 ease-in-out`}
    >
      <ul className=" flex items-end justify-center  ">
        {LINKS.map((link) => (
          <li key={link.id} className="p-3 ">
            <Link
              className="md:p-2 rounded"
              href={`/${link.path}`}
              scroll={false}
            >
              <h6 className=" relative text-lg w-fit ">
                {link.name}
                {pathName === link.path && <UnderLine />}
              </h6>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideTaps;
