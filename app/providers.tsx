"use client";

import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
