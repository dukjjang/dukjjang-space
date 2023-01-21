import "../styles/globals.css";
import Header from "./shared/Header";
import { Providers } from "./providers";
import Footer from "./shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="ts-color">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
