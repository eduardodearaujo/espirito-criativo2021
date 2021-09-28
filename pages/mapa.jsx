import Head from "next/head";
import styles from "../styles/Home.module.css";

import { HeaderMapa } from "@components/Header";
import { Menu } from "@components/Menu";
import { Banner } from "@components/Banner";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>espírito criativo - mapa</title>
        <meta name="description" content="CHANGE ME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderMapa>
        <Menu version="light" />
      </HeaderMapa>
      <Banner />
    </div>
  );
}

export default Home;
