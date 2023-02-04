import { Providers } from "./shard/Provider";
import { ServerThemeProvider } from "next-themes";
import "../styles/global.css";
import Header from "../ui/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html className="bg-background" lang="en">
        <body className="h-full bg-background overflow-x-hidden">
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
