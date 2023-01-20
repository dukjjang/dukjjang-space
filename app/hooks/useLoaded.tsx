"use client";
import { useState, useEffect } from "react";

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return { loaded };
};
