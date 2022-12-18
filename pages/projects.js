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
      <main className="relative bg-[#EEF1F5] dark:bg-[#192129] w-full h-[1000px]">
        <h1 className="absolute w-full text-center top-[-320px] font-bold text-4xl ">
          안녕하세요 진현덕입니다!
        </h1>
      </main>
    </Layout>
  );
}
