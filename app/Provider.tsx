import { ThemeProvider } from "next-themes";
import { DragProvider } from "./DragContext";
import "../styles/global.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <DragProvider>{children}</DragProvider>
    </ThemeProvider>
  );
}
