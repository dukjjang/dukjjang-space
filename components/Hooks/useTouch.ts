import { RefObject, TouchEvent, useEffect, useState } from "react";

type Props = {
  dragRef: RefObject<HTMLImageElement | HTMLElement>;
  wrapperRef: RefObject<HTMLHeadingElement | HTMLElement>;
};

const useTouch = ({ dragRef, wrapperRef }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState({
    x: 0,
    dx: 0,
    y: 0,
    dy: 0,
  });

  useEffect(() => {
    const handleDocumentTouchMove = (e) => {
      console.log("도큐멘트 터치무브");

      if (e.stopPropagation) e.stopPropagation();
      // if (e.cancelable) {
      //   console.log("캔슬러블이여서 중지함");
      //   e.preventDefault();
      // }
    };

    document.addEventListener("touchmove", handleDocumentTouchMove, {
      passive: false,
    });
    // return document.removeEventListener("touchmove", handleDocumentTouchMove);
  }, []);

  useEffect(() => {
    wrapperRef.current.addEventListener("touchstart", (e) => {
      document.body.classList.add("overflow-hidden");
      const { tagName } = e.target as HTMLElement;
      if (
        tagName === "H1" ||
        tagName === "H6" ||
        tagName === "svg" ||
        tagName === "BUTTON"
      )
        return;
      else e.preventDefault();
    });
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    console.log(" 터치 스타트");
    if (e.stopPropagation) e.stopPropagation();

    const wizardCloneWrapper = document.getElementById("wizard-clone-wrapper");
    wizardCloneWrapper.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    const cloneImg = document
      .getElementById("wizard")
      .cloneNode(true) as HTMLImageElement;

    cloneImg.classList.add("absolute");
    cloneImg.id = "cloneImg";

    wizardCloneWrapper.append(cloneImg);

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
      dx: dragRef.current.offsetLeft,
      dy: dragRef.current.offsetTop,
    });
  };

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    console.log("터치 무브");

    setPosition({
      ...position,
      x: touch.clientX - dragRef.current!.offsetWidth / 2,
      y: touch.clientY - dragRef.current!.offsetHeight / 2,
    });
    console.log("포지션", position.x, position.y);
  };

  const onTouchEnd = (e) => {
    console.log("터치 엔드");
    setPosition({ ...position, x: position.dx, y: position.dy });

    const wizardCloneWrapper = document.getElementById("wizard-clone-wrapper");
    wizardCloneWrapper.classList.add("hidden");

    const cloneImg = document.getElementById("cloneImg");
    wizardCloneWrapper.removeChild(cloneImg);
    //
    document.body.classList.remove("overflow-hidden");
  };

  return { onTouchStart, onTouchMove, onTouchEnd, position };
};

export default useTouch;
