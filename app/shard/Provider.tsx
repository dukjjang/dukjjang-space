"use client";

import { DragProvider } from "./DragContext";
import "../../styles/global.css";
import { SoundProvider } from "./SoundContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <DragProvider>
        <SoundProvider>{children}</SoundProvider>
      </DragProvider>
    </ThemeProvider>
  );
}
