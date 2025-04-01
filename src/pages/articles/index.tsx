import Layout from "@/components/Layout/Layout";
import React from "react";
import Head from "next/head";

const ArticlesPage: React.FC = () => {
  // 介紹有趣的 Github 專案，優化SEO
  // AI、Bitfinex lendingbot...
  const articles = [
    { title: "文章標題 1", summary: "這是文章 1 的摘要" },
    { title: "文章標題 2", summary: "這是文章 2 的摘要" },
    { title: "文章標題 3", summary: "這是文章 3 的摘要" },
  ];

  return (
    <Layout>
      <Head>
        <title>文章列表 | 箴雅數位工作室</title>
        <meta name="description" content="文章列表 | 箴雅數位工作室" />
      </Head>
      <h1>文章列表</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ArticlesPage;
