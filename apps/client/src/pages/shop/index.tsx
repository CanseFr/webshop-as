import { useEffect, useState } from 'react';
import { ArticleEntity } from 'api/dist/src/articles/entities/article.entity.ts';
import { ArticleCard } from '../../components/cards/article-card.tsx';
import { CircularProgress, Grid } from '@mui/material';

export const Shop = () => {
  const [articleList, setArticleList] = useState<ArticleEntity[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/api/articles')
      .then((res) => res.json())
      .then((data) => setArticleList(data));
    setIsLoading(false);
  }, []);

  if (!articleList)
    return (
      <Grid display="flex" justifyContent="center" marginTop={40}>
        <CircularProgress size={80} />
      </Grid>
    );

  return <ArticleCard articleList={articleList} />;
};
