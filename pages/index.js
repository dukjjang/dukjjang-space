import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/home/here';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>덕짱 포트폴리오</title>
        <meta name='description' content='소통하며 성장하는 신입개발자' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
