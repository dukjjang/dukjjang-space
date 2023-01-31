import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  showSideTaps: boolean;
  toggleSideTaps: () => void;
};

const MenuButton = ({ showSideTaps, toggleSideTaps }: Props) => {
  return (
    <div className="z-50 transition-all duration-200">
      {showSideTaps ? (
        <MdOutlineClose size={25} onClick={toggleSideTaps} />
      ) : (
        <RxHamburgerMenu
          className="md:hidden"
          onClick={toggleSideTaps}
          size={25}
        />
      )}
    </div>
  );
};

export default MenuButton;
