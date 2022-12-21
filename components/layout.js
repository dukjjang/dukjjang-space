import Header from "./Header/header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-primary relative">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
