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
  const [beforeOverEle, setBeforeOverEle] = useState<HTMLElement>();
  const [currentOverEle, setCurrentOverEle] = useState<HTMLElement>();

  if (beforeOverEle && currentOverEle === null) {
    beforeOverEle.classList.remove("border-2");
  }

  const handleTouchStart = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    const wizardCloneWrapper = document.getElementById("wizard-clone-wrapper");
    wizardCloneWrapper.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    const cloneImg = document
      .getElementById("wizard")
      .cloneNode(true) as HTMLImageElement;

    cloneImg.id = "cloneImg";
    cloneImg.style.width = "120px";
    cloneImg.style.height = "80px";

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    cloneImg.classList.add("absolute");
    wizardCloneWrapper.append(cloneImg);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];

    setPosition({
      x: touch.clientX - cloneRef.current!.offsetWidth / 2,
      y: touch.clientY - cloneRef.current!.offsetHeight / 2,
    });

    const touchOverElement = document.elementFromPoint(
      cloneRef.current.offsetLeft - cloneRef.current.offsetWidth + 50,
      cloneRef.current.offsetTop - cloneRef.current.offsetHeight + 100
    );

    const target = touchOverElement?.closest("ul > li") as HTMLElement;

    if (target) {
      setBeforeOverEle(target);
      setCurrentOverEle(target);

      target.classList.add("border-2");
      target.classList.add("border-green-400");
    } else {
      setCurrentOverEle(null);
    }
  };

  const handleTouchEnd = (e) => {
    const touchOverElement = document.elementFromPoint(
      cloneRef.current.offsetLeft - cloneRef.current.offsetWidth + 50,
      cloneRef.current.offsetTop - cloneRef.current.offsetHeight + 100
    );

    const target = touchOverElement?.closest("ul > li") as HTMLElement;

    if (target) {
      target.classList.remove("border-2");
      target.classList.remove("border-green-400");
    }

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
