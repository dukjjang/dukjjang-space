import { NextPage } from "next";
import Resume from "./shared/Resume";
import Waves from "./shared/Waves";

const Home: NextPage = () => {
  return (
    <main className=" h-full w-full bg-white dark:bg-[#0E141B]">
      <Waves />
      <Resume />
    </main>
  );
};

export default Home;
