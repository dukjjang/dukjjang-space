import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef } from "react";
import useDragAndDrop from "../hooks/useDragAndDrop";
import DragIcon from "./DragIcon";
import ThemeToggleButton from "./Header/ThemeToggleButton";
import MenuButton from "./MenuButton";
import Taps from "./Taps";

type Props = {
  showSideTaps: boolean;
  setShowSideTaps: Dispatch<SetStateAction<boolean>>;
  LINKS: { id: number; name: string; path: string }[];
};

const Nav = ({ showSideTaps, setShowSideTaps, LINKS }: Props) => {
  const pathName = usePathname().slice(1);
  const wizardRef = useRef<HTMLImageElement>(null);
  const cloneBoxRef = useRef<HTMLDivElement>(null);
  const broomRef = useRef<HTMLImageElement>(null);

  const { position, onDrags, onTouches } = useDragAndDrop({
    wizardRef,
    cloneBoxRef,
    broomRef,
  });

  const toggleSideTaps = () => {
    setShowSideTaps(!showSideTaps);
  };

  return (
    <nav
      id="nav"
      className=" text-background h-14 gap-3 md:gap-8 font-normal text-[16px] ml-auto 
          flex items-center justify-center"
    >
      <DragIcon
        pathName={pathName}
        iconRef={wizardRef}
        onTouches={onTouches}
        onDrags={onDrags}
        iconName={"wizard"}
      />
      <DragIcon
        pathName={pathName}
        iconRef={broomRef}
        onTouches={onTouches}
        onDrags={onDrags}
        iconName={"broom"}
      />
      <div
        id={"clone-box"}
        ref={cloneBoxRef}
        style={{ top: position.y, left: position.x }}
        className="z-50 absolute hidden opacity-80 w-fit h-fit"
        draggable
      />
      <Taps pathName={pathName} LINKS={LINKS} />
      <ThemeToggleButton />
      <MenuButton showSideTaps={showSideTaps} toggleSideTaps={toggleSideTaps} />
    </nav>
  );
};

export default Nav;
