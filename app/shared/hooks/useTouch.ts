"use client";

import { RefObject, useEffect, useState } from "react";
import { useDrag } from "../../DragContext";

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

  const [beforeOverElementId, setBeforeOverElementId] = useState<string>("");
  const [currentOverElementId, setCurrentOverElementId] = useState<string>("");
  const [overId, setOverId] = useDrag();

  const cloneWizard = () => {
    const cloneWizardWrapper = document.getElementById("clone-wizard");
    cloneWizardWrapper.classList.remove("hidden");

    const cloneImg = document
      .getElementById("wizard")
      .cloneNode(true) as HTMLImageElement;

    cloneImg.id = "cloneImg";
    cloneImg.style.width = "120px";
    cloneImg.style.height = "80px";

    cloneImg.classList.add("absolute");
    cloneWizardWrapper.append(cloneImg);
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.style.touchAction = "none";
    document.body.classList.add("overflow-hidden");

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    cloneWizard();
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];

    setPosition({
      x: touch.clientX - cloneRef.current!.offsetWidth / 2,
      y: touch.clientY - cloneRef.current!.offsetHeight / 2,
    });

    const touchOverElement = document
      .elementsFromPoint(touch.clientX, touch.clientY)
      .find((ele) => ele.nodeName === "LI");

    if (touchOverElement) {
      setOverId(touchOverElement.id);
      // setCurrentOverElementId(touchOverElement.id);
      // setBeforeOverElementId(touchOverElement.id);
    } else {
      setOverId("");
      // setCurrentOverElementId("");
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const target = document
      .elementsFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      )
      .find((ele) => ele.nodeName === "LI") as HTMLElement;

    if (target) {
      setCurrentOverElementId("");
      setBeforeOverElementId("");
      setOverId("");
      target.classList.add("h-96");
      target.dataset.dragCache = "full";
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const cloneWizardWrapper = document.getElementById("clone-wizard");
    cloneWizardWrapper.classList.add("hidden");

    const cloneImg = document.getElementById("cloneImg");
    cloneWizardWrapper.removeChild(cloneImg);

    setPosition({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    document.body.classList.remove("overflow-hidden");
    document.body.style.touchAction = "auto";
  };

  const addTouchOverStyle = (before: string, current: string) => {
    if (typeof window !== "object") return;
    const overElement = document.getElementById(current) ?? null;
    const prevOverElement = document.getElementById(before) ?? null;

    if (overElement && overElement.dataset.dragCache !== "full") {
      overElement.dataset.over = "true";
    } else if (before !== current) {
      prevOverElement.dataset.over = "false";
    }
  };

  // addTouchOverStyle(beforeOverElementId, currentOverElementId);

  useEffect(() => {
    dragRef.current.addEventListener("touchstart", handleTouchStart);
    dragRef.current.addEventListener("touchmove", handleTouchMove);
    dragRef.current.addEventListener("touchend", handleTouchEnd);
  }, []);

  return position;
};

export default useTouch;
