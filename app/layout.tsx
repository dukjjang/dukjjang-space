import { Providers } from "./shard/Provider";
import { ServerThemeProvider } from "@wits/next-themes";
import "../styles/global.css";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className=" overflow-x-hidden">
          <Providers>
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
