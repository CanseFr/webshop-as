import { useEffect, useState } from 'react';
import { ArticleEntity } from 'api/dist/src/articles/entities/article.entity.ts';
import { ArticleCard } from '../../components/cards/article-card.tsx';

export const Shop = () => {
  const [articleList, setArticleList] = useState<ArticleEntity[]>();

  useEffect(() => {
    fetch('http://localhost:3000/api/articles')
      .then((res) => res.json())
      .then((data) => setArticleList(data));
  }, []);

  if (!articleList) return;

  return <ArticleCard articleList={articleList} />;
};
