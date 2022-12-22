import Layout from "../components/layout";
import Head from "next/head";
import Waves from "../components/home/waves";
import Resume from "../components/home/Resume";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hyunduk Jin</title>
        <meta name="description" content="frontend developer Hyunduk Jin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Waves />
      <Resume />
    </Layout>
  );
}
