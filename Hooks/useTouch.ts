import { RefObject, useEffect, useState } from "react";

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

  const handleTouchStart = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    document.body.style.touchAction = "none";

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
      cloneRef.current.offsetLeft + cloneRef.current.offsetWidth,
      cloneRef.current.offsetTop - cloneRef.current.offsetHeight + 100
    );
    const target = touchOverElement?.closest("ul > li") as HTMLElement;

    if (target) {
      if (target.dataset.dragCache === "full") return;
      setBeforeOverEle(target);
      setCurrentOverEle(target);

      target.dataset.over = "true";
    } else {
      setCurrentOverEle(null);
    }
  };

  if (beforeOverEle && currentOverEle === null) {
    beforeOverEle.dataset.over = "false";
  }

  const handleTouchEnd = (e) => {
    const touchOverElement = document.elementFromPoint(
      cloneRef.current.offsetLeft - cloneRef.current.offsetWidth + 50,
      cloneRef.current.offsetTop - cloneRef.current.offsetHeight + 100
    );

    const target = touchOverElement?.closest("ul > li") as HTMLElement;

    if (target) {
      target.dataset.over = "false";
      target.classList.add("row-span-4");
      target.classList.add("h-[400px]");
      target.dataset.dragCache = "full";
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
    document.body.style.touchAction = "auto";
  };

  useEffect(() => {
    dragRef.current.addEventListener("touchstart", handleTouchStart);
    dragRef.current.addEventListener("touchmove", handleTouchMove);
    dragRef.current.addEventListener("touchend", handleTouchEnd);
  }, []);

  return position;
};

export default useTouch;
