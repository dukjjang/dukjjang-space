import { useState, useEffect } from "react";
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: 1440,
    innerHeight: 707,
  });

  useEffect(() => {
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return { windowSize };
};
