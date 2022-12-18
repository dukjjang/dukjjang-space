import Layout from "../components/layout";
import Head from "next/head";
import Waves from "../components/home/waves";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Jinji</title>
        <meta name="projects" content="프로젝트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Waves />
      <h1 className="w-full h-[1000px]">프로젝트</h1>
    </Layout>
  );
}
