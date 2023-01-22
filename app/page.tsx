import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Resume from "./shared/Resume";

const Home = () => {
  return (
    <main className=" h-full w-full bg-background">
      <Header />
      <Resume />
      <Footer />
    </main>
  );
};

export default Home;
