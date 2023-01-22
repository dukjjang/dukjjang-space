import { Providers } from "./Providers";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
