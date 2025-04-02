import React from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import ServiceList from "@/components/ui/ServiceList";

const Transcription = () => {
  const services = [
    {
      title: "1. 法律與司法相關",
      descriptions: [
        "法律訴訟：庭審過程、證詞、公證文件需要完整記錄，作為證據或審查依據。",
        "警察詢問筆錄：犯罪調查時，確保證人、嫌疑人的供詞無誤。",
        "合約與協議談判：防止日後因理解不同而產生爭議。",
      ],
    },
    {
      title: "2. 企業與商業場合",
      descriptions: [
        "董事會與股東會議：確保決策透明，作為後續執行依據。",
        "商業談判與合約簽訂：避免日後因口頭協議不清而產生糾紛。",
        "內部培訓與演講：讓員工能回顧關鍵內容，提高學習效果。",
      ],
    },
    {
      title: "3. 政府與公共事務",
      descriptions: [
        "國會/立法院會議：確保公共政策討論與決策透明。",
        "記者會與政府公告：讓媒體與公眾能準確理解官方立場。",
        "公共聽證會：提供完整記錄，作為後續政策討論的參考。",
      ],
    },
    {
      title: "4. 媒體與學術",
      descriptions: [
        "新聞訪談：確保報導準確，不失真。",
        "學術研究：記錄田野調查、訪談內容，方便後續分析與引用。",
        "研討會與學術會議：方便學者回顧與整理研究資料。",
      ],
    },
    {
      title: "5. 醫療與健康照護",
      descriptions: [
        "醫療記錄與手術討論：確保病歷記錄完整，供醫生參考。",
        "心理諮詢與治療：有些場合會記錄對話以供後續分析與診斷。",
      ],
    },
    {
      title: "6. 個人與創作",
      descriptions: [
        "作家與內容創作者：記錄靈感、訪談或對話內容，以利整理和創作。",
        "口述歷史專案：記錄老一輩的經歷與故事，作為文化傳承。",
      ],
    },
  ];
  return (
    <Layout>
      <Head>
        <title>逐字稿聽打 | 箴雅數位工作室</title>
        <meta name="description" content="服務項目 | 逐字稿聽打" />
      </Head>
      <h1>
        <div>逐字稿聽打：以音檔時長計價</div>
      </h1>
      <ServiceList services={services} />
    </Layout>
  );
};

export default Transcription;
