import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header } from "@components/Header";
import { Menu } from "@components/Menu";
import { SlideShow } from "@components/SlideShow";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Espírito Criativo</title>
        <meta name="description" content="CHANGE ME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Menu />
        <SlideShow />
      </Header>
    </div>
  );
}

export default Home;
