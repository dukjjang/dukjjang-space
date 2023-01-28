import { previewData } from "next/headers";
import Footer from "./shared/components/Footer";
import Resume from "./shared/components/Resume";

const Home = () => {
  if (!previewData) return <div>not Data</div>;

  return (
    <main className=" h-full w-full bg-background">
      <Resume />
      <Footer />
    </main>
  );
};

export default Home;
