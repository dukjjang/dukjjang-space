import { NextPage } from "next";
import Header from "./components/Header";
import Resume from "./components/home/Resume";
import Waves from "./components/home/waves";

const Page: NextPage = () => {
  return (
    <>
      <Header />
      <Waves />
      <Resume />
    </>
  );
};

export default Page;
