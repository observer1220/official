import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface Article {
  title: string;
  content: string;
}

interface ArticleProps {
  article: Article;
}

const ArticlePage: React.FC<ArticleProps> = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <div>{article.content}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of articles from an API or a local file
  const articles = await fetch('https://api.example.com/articles');
  const data = await articles.json();

  const paths = data.map((article: Article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  
  // Fetch the article data based on the slug
  const res = await fetch(`https://api.example.com/articles/${slug}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;