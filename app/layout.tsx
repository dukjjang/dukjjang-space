import { Providers } from "./shard/Provider";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import GoogleClientAnalytics from "./shard/GoogleClientAnalytics";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background overflow-x-hidden ">
        <GoogleClientAnalytics />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
