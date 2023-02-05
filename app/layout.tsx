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
      <html lang="en">
        <body className="bg-background overflow-x-hidden">
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
