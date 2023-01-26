import { RefObject, useEffect, useState } from "react";

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
    wrapperRef.current.addEventListener("touchstart", (e) => {
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

    window.scroll(0, 0);

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    console.log(scrollY);

    return window.removeEventListener("scroll", () => {});
  }, []);

  const onTouchStart = (e) => {
    console.log("마법 터치");

    const nav = document.getElementById("nav");

    const cloneImg = dragRef.current.cloneNode(true) as HTMLImageElement;
    nav.append(cloneImg);
    nav.insertBefore(cloneImg, nav.firstChild);
    // cloneImg.style.position = "absolute";
    // cloneImg.style.top = dragRef.current.offsetTop.toString();
    // cloneImg.style.left = dragRef.current.offsetLeft.toString();
    cloneImg.id = "cloneImg";

    setPosition({
      ...position,
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    dragRef.current.classList.add("absolute");
  };

  const onTouchMove = (e) => {
    const touch = e.touches[0];

    if (
      touch.pageX < 0 + dragRef.current!.offsetWidth / 2 ||
      touch.pageX + dragRef.current!.offsetWidth / 2 > window.screen.width
    ) {
      return;
    }
    if (
      touch.pageY < position.dy - scrollY ||
      touch.pageY - scrollY + dragRef.current!.offsetHeight / 2 >
        window.screen.height
    ) {
      return;
    }

    setPosition({
      ...position,
      x: touch.pageX - dragRef.current!.offsetWidth / 2,
      y: touch.pageY - scrollY - dragRef.current!.offsetHeight / 2,
    });

    // const cloneImg = document.getElementById("cloneImg");
    // cloneImg.style.top = (
    //   touch.pageX -
    //   dragRef.current!.offsetWidth / 2
    // ).toString();
    // cloneImg.style.left = (
    //   touch.pageY -
    //   scrollY -
    //   dragRef.current!.offsetHeight / 2
    // ).toString();

    const target = document.elementFromPoint(
      position.x + dragRef.current!.offsetWidth,
      position.y + dragRef.current!.offsetHeight - 5
    );
  };

  const onTouchEnd = (e) => {
    setPosition({ ...position, x: position.dx, y: position.dy });
    dragRef.current.classList.remove("absolute");

    const cloneImg = document.getElementById("cloneImg");
    document.getElementById("nav").removeChild(cloneImg);
  };

  return { onTouchStart, onTouchMove, onTouchEnd, position };
};

export default useTouch;
