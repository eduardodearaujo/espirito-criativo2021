import Head from "next/head";

import { Header } from "@components/Header";
import { Menu } from "@components/Menu";
import { SlideShow } from "@components/SlideShow";
import { WhatWeDo } from "@components/WhatWeDo"
import { Footer } from "@components/Footer"

function Home() {
  return (
    <div>
      <Head>
        <title>Espírito Criativo</title>
        <meta name="description" content="CHANGE ME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Menu />
        <SlideShow />
      </Header>

      <WhatWeDo />
      
      <Footer />
    </div>
  );
}

export default Home;
