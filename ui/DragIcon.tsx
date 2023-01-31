import Image from "next/image";
import { RefObject } from "react";

type Props = {
  onTouches: IOnTouches;
  onDrags: IOnDrags;
  pathName: string;
  iconRef: RefObject<HTMLDivElement>;
  iconName: string;
};

const DragIcon = ({
  onTouches,
  onDrags,
  pathName,
  iconRef,
  iconName,
}: Props) => {
  return (
    <div
      id={`${iconName}-icon`}
      ref={iconRef}
      className={`peer ${pathName !== "writing" && "hidden"}`}
      draggable
      {...onTouches}
      {...onDrags}
    >
      <Image
        id={iconName}
        width={iconName === "wizard" ? 50 : 40}
        height={iconName === "wizard" ? 50 : 40}
        alt={iconName}
        src={`/images/${iconName}.png`}
      />
    </div>
  );
};

export default DragIcon;
