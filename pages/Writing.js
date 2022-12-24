import Layout from "../components/layout";
import Head from "next/head";

const Writing = () => {
  return (
    <Layout>
      <Head>
        <title>Jinji</title>
        <meta name="projects" content="프로젝트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#EFF1F5] dark:bg-[#0E141B] h-full">
        <h1>Writing</h1>
        <section className="h-[1000px]"></section>
      </main>
    </Layout>
  );
};

export default Writing;
