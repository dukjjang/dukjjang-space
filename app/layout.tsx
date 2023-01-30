import { Providers } from "./Provider";
import "../styles/global.css";
import { ServerThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className="bg-background">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
