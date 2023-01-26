import { RefObject, TouchEvent, useEffect, useState } from "react";

type Props = {
  dragRef: RefObject<HTMLImageElement | HTMLElement>;
  cloneRef: RefObject<HTMLElement>;
  wrapperRef: RefObject<HTMLElement>;
};

const useTouch = ({ dragRef, cloneRef, wrapperRef }: Props) => {
  const [position, setPosition] = useState({
    x: 0,
    dx: 0,
    y: 0,
    dy: 0,
  });

  // useEffect(() => {
  //   const handleDocumentTouchMove = (e) => {
  //     if (cloneRef.current.children.length > 0) {
  //       console.log("도큐먼트에서 막음");
  //       e.preventDefault();
  //     }
  //   };
  //
  //   const writingPage = document.getElementById("writing");
  //   console.log("도큐먼트 터치무브");
  //
  //   if (writingPage)
  //     writingPage.addEventListener("touchmove", handleDocumentTouchMove, {
  //       passive: false,
  //     });
  // }, []);

  useEffect(() => {
    wrapperRef.current.addEventListener("touchstart", (e) => {
      console.log("헤더 터치");
      document.body.classList.add("overflow-hidden");
      console.log(cloneRef.current.children);
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

  const handleTouchStart = (e) => {
    console.log("drag 터치 스타트");
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

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
      dx: dragRef.current.offsetLeft,
      dy: dragRef.current.offsetTop,
    });
  };

  const onTouchMove = (e) => {
    const touch = e.touches[0];
    console.log("터치 무브");

    setPosition({
      ...position,
      x: touch.clientX - cloneRef.current!.offsetWidth / 2,
      y: touch.clientY - cloneRef.current!.offsetHeight / 2,
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

  useEffect(() => {
    dragRef.current.addEventListener("touchstart", handleTouchStart);
    dragRef.current.addEventListener("touchmove", onTouchMove);
  }, []);

  return { onTouchMove, onTouchEnd, position };
};

export default useTouch;
