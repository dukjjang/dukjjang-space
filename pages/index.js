import Layout from "../components/layout";
import Hero from "../components/home/here";
import Head from "next/head";
import Waves from "../components/home/waves";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hyunduk Jin</title>
        <meta name="description" content="frontend developer Hyunduk Jin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full  ">
        <Waves />
        <section className=" relative w-full px-40 bg-white h-[1000px] dark:bg-[#0E141B] ">
          <h1 className=" flex-wrap absolute  md:w-full left-14 md:left-20 top-[-80px] text-3xl md:text-6xl font-bold">
            안녕하세요{" "}
            <span className=" relative z-20">
              진현덕{" "}
              <span className="absolute h-3 z-[-1]  w-20 md:w-40 bottom-[0px] md:bottom-[10px] left-[0px] bg-[#C3FA07]"></span>
            </span>{" "}
            입니다!
          </h1>
        </section>
      </main>
    </Layout>
  );
}
