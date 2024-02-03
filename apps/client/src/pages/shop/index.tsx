import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArticleEntity } from 'api/dist/src/articles/entities/article.entity.ts';
import { CardMedia, Grid } from '@mui/material';

export const Shop = () => {
  const [articleList, setArticleList] = useState<ArticleEntity[]>();

  useEffect(() => {
    fetch('http://localhost:3000/api/articles')
      .then((res) => res.json())
      .then((data) => setArticleList(data));
  }, []);

  console.log(articleList);
  if (!articleList) return <p>aze</p>;
  return (
    <Grid display="flex" flexWrap="wrap" padding={5} justifyContent="center">
      {articleList.map((article) => (
        <Card sx={{ maxWidth: 345, padding: 2, margin: 3, flex: '1 0 21%','&:hover':{boxShadow: "6px 3px 3px #9fa2a6"} }}>
          <CardMedia sx={{ height: 340 }} image={article.gallery.thumbnail_path} title={article.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{article.price}€</Typography>
            <Button size="small">Consulter</Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};
