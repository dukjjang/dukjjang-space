import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>덕짱 포트폴리오</title>
        <meta name='description' content='소통하며 성장하는 신입개발자' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>오늘도 빡코딩</h1>
    </div>
  );
}
