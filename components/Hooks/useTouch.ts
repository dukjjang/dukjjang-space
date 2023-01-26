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
      const touchTarget = e.target as HTMLElement;
      if (touchTarget.hasAttribute("dragable")) e.preventDefault();
    };

    document.addEventListener("touchmove", handleDocumentTouchMove, {
      passive: false,
    });
    return document.removeEventListener("touchmove", handleDocumentTouchMove);
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

  const onTouchStart = (e) => {
    console.log("마법 터치");

    const nav = document.getElementById("nav");

    document.body.classList.add("overflow-hidden");

    const cloneImg = dragRef.current.cloneNode(true) as HTMLImageElement;
    nav.append(cloneImg);
    nav.insertBefore(cloneImg, nav.firstChild);
    cloneImg.id = "cloneImg";

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
      dx: dragRef.current.offsetLeft,
      dy: dragRef.current.offsetTop,
    });

    dragRef.current.classList.add("absolute");
  };

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];

    setPosition({
      ...position,
      x: touch.clientX - dragRef.current!.offsetWidth / 2,
      y: touch.clientY - dragRef.current!.offsetHeight / 2,
    });
  };

  const onTouchEnd = (e) => {
    setPosition({ ...position, x: position.dx, y: position.dy });
    dragRef.current.classList.remove("absolute");

    const cloneImg = document.getElementById("cloneImg");
    document.getElementById("nav").removeChild(cloneImg);
    document.body.classList.remove("overflow-hidden");
  };

  return { onTouchStart, onTouchMove, onTouchEnd, position };
};

export default useTouch;
