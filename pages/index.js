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
      <Waves />
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className=" container mx-auto flex px-5 py-24 md:flex-col flex-col items-center"></div>
      </section>
    </Layout>
  );
}
