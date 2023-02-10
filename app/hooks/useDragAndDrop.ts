"use client";

import { DragEvent, RefObject, useEffect, useState, TouchEvent } from "react";
import useSound from "use-sound";
import { useDrag } from "../shard/DragContext";
import { useSettingSound } from "../shard/SoundContext";

type Props = {
  wizardRef: RefObject<HTMLImageElement | HTMLElement>;
  broomRef: RefObject<HTMLImageElement | HTMLElement>;
  cloneBoxRef: RefObject<HTMLElement>;
};

const useDragAndDrop = ({ wizardRef, cloneBoxRef, broomRef }: Props) => {
  const [drag, setDrag] = useDrag();
  const [sound] = useSettingSound();
  const [playbackRate, setPlaybackRate] = useState(0.8);
  const [playMagic] = useSound("/sounds/magic.mp3", {
    playbackRate,
    volume: sound === true ? 0.5 : 0,
  });

  const [playBroom] = useSound("/sounds/broom.mp3", {
    playbackRate,
    volume: sound === true ? 0.7 : 0,
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const cloneDragElement = (target: HTMLElement) => {
    const cloneElement = target.cloneNode(true) as HTMLImageElement;
    const cloneImg = cloneElement.firstChild as HTMLElement;
    cloneElement.id = "cloneElement";
    cloneImg.style.width = "70px";
    cloneImg.style.height = "70px";
    cloneBoxRef.current.append(cloneElement);
    cloneBoxRef.current.classList.remove("hidden");
  };
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    setPosition({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop,
    });

    cloneDragElement(target);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];

    setPosition({
      x: touch.clientX - cloneBoxRef.current!.offsetWidth / 2,
      y: touch.clientY - cloneBoxRef.current!.offsetHeight / 2,
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

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const dragOverElement = document
      .elementsFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      )
      .find((ele) => ele.nodeName === "LI") as HTMLElement;

    const targetIndex = Number(dragOverElement?.dataset.idx);
    const targetIcon = e.currentTarget.id;

    if (dragOverElement) {
      setDrag({
        overId: "",
        cache: drag.cache.map((count, index) => {
          if (e.currentTarget.id === "wizard-icon")
            return index === targetIndex && count < 3 ? (count += 1) : count;
          else return index === targetIndex ? (count = 0) : count;
        }),
      });
    }

    cloneBoxRef.current.classList.add("hidden");
    const cloneElement = document.getElementById("cloneElement");
    cloneBoxRef.current.removeChild(cloneElement);

    setPosition({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop,
    });

    playSound({ targetIndex, targetIcon });
  };

  const playSound = ({
    targetIndex,
    targetIcon,
  }: {
    targetIndex: number;
    targetIcon: string;
  }) => {
    if (drag.cache[targetIndex] < 3 && targetIcon === "wizard-icon") {
      playMagic();
      setPlaybackRate(playbackRate + 0.1);
    }
    if (drag.cache[targetIndex] > 0 && targetIcon === "broom-icon") {
      playBroom();
      setPlaybackRate(0.9);
    }
  };

  const handleDrag = (e: DragEvent): void => {
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
    const dragOverElement = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find((ele) => ele.nodeName === "LI") as HTMLElement;

    const targetIndex = Number(dragOverElement?.dataset.idx);
    const targetIcon = e.currentTarget.id;

    if (dragOverElement) {
      setDrag({
        overId: "",
        cache: drag.cache.map((count, index) => {
          if (targetIcon === "wizard-icon") {
            return targetIndex === index && count < 3 ? (count += 1) : count;
          } else return targetIndex === index ? 0 : count;
        }),
      });
    }

    playSound({ targetIndex, targetIcon });
  };

  useEffect(() => {
    const handleTouchStart = (e: Event) => {
      e.preventDefault();
    };

    wizardRef.current.addEventListener("touchstart", handleTouchStart, );
    broomRef.current.addEventListener("touchstart", handleTouchStart);
  }, []);

  return {
    position,
    onTouches: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    onDrags: { onDrag: handleDrag, onDragEnd: handleDragEnd },
  };
};

export default useDragAndDrop;
