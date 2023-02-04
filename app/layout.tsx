import { Providers } from "./shard/Provider";
import { ServerThemeProvider } from "next-themes";
import "../styles/global.css";
import Header from "../ui/Header";
import Stars from "../ui/Stars";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
