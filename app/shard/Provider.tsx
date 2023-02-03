import { ThemeProvider } from "next-themes";
import { DragProvider } from "./DragContext";
import "../../styles/global.css";
import { SoundProvider } from "./SoundContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <DragProvider>
        <SoundProvider>{children}</SoundProvider>
      </DragProvider>
    </ThemeProvider>
  );
}
