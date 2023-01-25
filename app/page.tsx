import { previewData } from "next/headers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";

const Home = () => {
  if (!previewData) return <div>not Data</div>;

  return (
    <main className=" h-full w-full bg-background">
      <Header />
      <Resume />
      <Footer />
    </main>
  );
};

export default Home;
