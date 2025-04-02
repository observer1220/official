import React from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import ServiceList from "@/components/ui/ServiceList";

const Translation = () => {
  const services = [
    {
      title: "1. 影音內容",
      descriptions: [
        "影片字幕：YouTube 影片、電影、紀錄片、教育影片等。",
        "遊戲語音與字幕：遊戲中的對話、劇情文本、UI 介面等。",
        "廣播與 Podcast：將音頻內容轉換成文字並翻譯，方便閱讀或做成文章。",
      ],
    },
    {
      title: "2. 技術與專業文件",
      descriptions: [
        "軟體與技術文件：API 文件、使用手冊、開發者指南等。",
        "研究與學術論文：跨國合作或學術研究的發表。",
        "法律文件：契約、專利、隱私政策等。",
      ],
    },
    {
      title: "3. 商業與行銷",
      descriptions: [
        "企業報告：財報、商業計畫書、內部文件。",
        "行銷與廣告：產品說明、廣告內容、社群媒體貼文。",
        "網站與 APP 本地化：網站內容、應用程式 UI 翻譯。",
      ],
    },
    {
      title: "4. 日常應用",
      descriptions: [
        "個人文件：履歷、求職信、推薦信等。",
        "新聞與文章：國際新聞、部落格、書籍等。",
      ],
    },
  ];
  return (
    <Layout>
      <Head>
        <title>文件翻譯 | 箴雅數位工作室</title>
        <meta name="description" content="服務項目 | 文件翻譯" />
      </Head>
      <h1>
        <div>文件翻譯：以字數計價</div>
      </h1>
      <ServiceList services={services} />
    </Layout>
  );
};

export default Translation;
