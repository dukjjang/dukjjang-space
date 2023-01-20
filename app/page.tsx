import { NextPage } from "next";
import Resume from "./components/home/Resume";
import Waves from "./components/home/waves";

const Page: NextPage = () => {
  return (
    <>
      <Waves />
      <Resume />
    </>
  );
};

export default Page;
