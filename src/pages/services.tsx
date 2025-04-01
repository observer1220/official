import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

const Services: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>服務項目 | 箴雅數位工作室</title>
        <meta name="description" content="服務項目 | 箴雅數位工作室" />
      </Head>
      <h1>服務項目</h1>
      <p>我們提供以下服務：</p>
      <ul>
        <li>服務一</li>
        <li>服務二</li>
        <li>服務三</li>
        <li>服務四</li>
      </ul>
    </Layout>
  );
};

export default Services;
