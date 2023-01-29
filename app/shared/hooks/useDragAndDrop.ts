"use client";

import {
  DragEvent,
  DragEventHandler,
  RefObject,
  useEffect,
  useState,
} from "react";
import { useDrag } from "../../DragContext";

type Props = {
  dragRef: RefObject<HTMLImageElement | HTMLElement>;
  broomRef: RefObject<HTMLImageElement | HTMLElement>;
  cloneRef: RefObject<HTMLElement>;
  wrapperRef: RefObject<HTMLElement>;
};

const useDragAndDrop = ({ dragRef, cloneRef, broomRef }: Props) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [drag, setDrag] = useDrag();

  console.log("hook drag", drag);

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
      setDrag({ ...drag, overId: touchOverElement.id });
    } else {
      setDrag({ ...drag, overId: "" });
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
      setDrag({ ...drag, overId: "" });
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

  const handleDrag = (e: DragEvent): void => {
    console.log("handleDrag", e);
    const dragOverElement = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find((ele) => ele.nodeName === "LI");

    if (dragOverElement) {
      setDrag({ overId: dragOverElement.id, cache: drag.cache });
    } else {
      setDrag({ overId: "", cache: drag.cache });
    }
  };

  const handleDragEnd = (e: DragEvent): void => {
    const overElement = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find((ele) => ele.nodeName === "LI") as HTMLElement;

    console.log(e.currentTarget);

    if (overElement) {
      setDrag({
        overId: "",
        cache: drag.cache.map((count, index) => {
          if (e.currentTarget.id === "wizard-icon") {
            return Number(overElement.dataset.idx) === index && count < 2
              ? (count += 1)
              : count;
          } else return Number(overElement.dataset.idx) === index ? 0 : count;
        }),
      });
    }
  };

  useEffect(() => {
    dragRef.current.addEventListener("touchstart", handleTouchStart);
    dragRef.current.addEventListener("touchmove", handleTouchMove);
    dragRef.current.addEventListener("touchend", handleTouchEnd);
  }, []);

  return {
    position,
    onDrags: { onDrag: handleDrag, onDragEnd: handleDragEnd },
  };
};

export default useDragAndDrop;
