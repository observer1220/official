import React from "react";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import ServiceList from "@/components/ui/ServiceList";

const WebDevelopment = () => {
  const services = [
    {
      title: "1. 企業形象與品牌建立",
      descriptions: [
        "公司官方網站：用來展示公司背景、價值觀、聯絡方式，提升專業度與可信度。",
        "個人品牌網站：適合創業者、顧問、設計師等，展示作品和經歷，建立個人影響力。",
      ],
    },
    {
      title: "2. 產品與服務展示",
      descriptions: [
        "產品目錄與電商網站：展示產品特色、提供購物功能（如 Shopify、WooCommerce）。",
        "SaaS 服務網站：介紹軟體產品的功能、訂閱方案，提供試用或註冊。",
      ],
    },
    {
      title: "3. 財報與資訊透明",
      descriptions: [
        "投資者關係網站：公開財報、股東資訊、業務發展方向，讓投資人獲取透明資訊。",
        "政府與 NGO 透明度網站：公佈政策、預算、計畫執行進度，提高公信力。",
      ],
    },
    {
      title: "4. 客戶支援與社群互動",
      descriptions: [
        "客服與 FAQ 網站：提供問題解答，減少人工客服成本（如 Zendesk）。",
        "論壇與社群網站：用於討論與知識分享（如 Discourse、Reddit）。",
      ],
    },
    {
      title: "5. 活動與預約管理",
      descriptions: [
        "活動網站：讓使用者報名、查看議程，適用於展覽、研討會、課程（如 Eventbrite）。",
        "預約系統：醫療、健身、餐廳等行業使用（如 Calendly、OpenTable）。",
      ],
    },
    {
      title: "6. 內部管理與自動化",
      descriptions: [
        "內部系統網站：企業內部使用，例如 HR 管理、專案管理（如 Jira、Notion）。",
        "文件與知識管理：供內部人員查閱資料（如 Confluence、Google Sites）。",
      ],
    },
  ];
  return (
    <Layout>
      <Head>
        <title>網站製作 | 箴雅數位工作室</title>
        <meta name="description" content="服務項目 | 網站開發" />
      </Head>
      <h1>
        <div>網站製作</div>
      </h1>
      <ServiceList services={services} />
    </Layout>
  );
};

export default WebDevelopment;
