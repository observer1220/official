import Layout from "@/components/Layout/Layout";
import React from "react";

const ArticlesPage: React.FC = () => {
  const articles = [
    { title: "文章標題 1", summary: "這是文章 1 的摘要" },
    { title: "文章標題 2", summary: "這是文章 2 的摘要" },
    { title: "文章標題 3", summary: "這是文章 3 的摘要" },
  ];

  return (
    <Layout>
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
