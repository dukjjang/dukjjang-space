import { RefObject, TouchEventHandler, useEffect, useState } from "react";

type Props = {
  dragRef: RefObject<HTMLImageElement | HTMLElement>;
  cloneRef: RefObject<HTMLElement>;
  wrapperRef: RefObject<HTMLElement>;
};

const useTouch = ({ dragRef, cloneRef }: Props) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleTouchStart = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const wizardCloneWrapper = document.getElementById("wizard-clone-wrapper");
    wizardCloneWrapper.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    const cloneImg = document
      .getElementById("wizard")
      .cloneNode(true) as HTMLImageElement;

    cloneImg.classList.add("absolute");
    cloneImg.id = "cloneImg";
    cloneImg.style.width = "120px";
    cloneImg.style.height = "80px";

    wizardCloneWrapper.append(cloneImg);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];

    setPosition({
      ...position,
      x: touch.clientX - cloneRef.current!.offsetWidth / 2,
      y: touch.clientY - cloneRef.current!.offsetHeight / 2,
    });
  };

  const handleTouchEnd = () => {
    const wizardCloneWrapper = document.getElementById("wizard-clone-wrapper");
    wizardCloneWrapper.classList.add("hidden");

    const cloneImg = document.getElementById("cloneImg");
    wizardCloneWrapper.removeChild(cloneImg);

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    dragRef.current.addEventListener("touchstart", handleTouchStart);
    dragRef.current.addEventListener("touchmove", handleTouchMove);
    dragRef.current.addEventListener("touchend", handleTouchEnd);
  }, []);

  return position;
};

export default useTouch;
