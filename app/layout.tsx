import { Providers } from "./shard/Provider";
import "../styles/global.css";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import GoogleClientAnalytics from "./shard/GoogleClientAnalytics";
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
