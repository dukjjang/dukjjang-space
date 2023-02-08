"use client";

import { DragProvider } from "./DragContext";
import "../../styles/global.css";
import { SoundProvider } from "./SoundContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DragProvider>
      <SoundProvider>{children}</SoundProvider>
    </DragProvider>
  );
}
