"use client";

import { ThemeProvider } from "next-themes";
import "../styles/global.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
