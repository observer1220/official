import React from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

const Projects: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>專案作品 | 箴雅數位工作室</title>
        <meta name="description" content="專案作品 | 箴雅數位工作室" />
      </Head>
      <h1>專案作品</h1>
      <p>這裡展示我們的專案範本內容。</p>
      {/* 可以在這裡添加更多專案的詳細信息或列表 */}
    </Layout>
  );
};

export default Projects;
