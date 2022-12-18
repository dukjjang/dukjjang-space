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
      <main className="w-full ">
        <Waves />
        <section className=" w-full bg-white h-[1000px] dark:bg-[#0E141B] ">
          <h1 className="w-full flex-wrap text-6xl font-bold">
            안녕하세요 진현덕입니다!
          </h1>
        </section>
      </main>
    </Layout>
  );
}
