import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Home/Banner";
import Head from "next/head";

const Home: React.FC = () => {
  // 網站上線時間: 會動的數字
  // 開放接案的日期: 會動的數字
  return (
    <Layout>
      <Head>
        <title>箴雅數位工作室</title>
        <meta name="description" content="箴雅數位工作室" />
      </Head>
      <Banner />
    </Layout>
  );
};

export default Home;
