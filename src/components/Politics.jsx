import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { Container, Grid, Typography, Button } from "@mui/material";

const Politics = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNews = () => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?category=politics&country=us&pageSize=10&page=${page}&apiKey=75fb17c0265e4e6aa3b95623302f46a6`
      )
      .then((response) => {
        setNews((prevNews) => [...prevNews, ...response.data.articles]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Politics News
      </Typography>
      <Grid container spacing={2}>
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={() => setPage(page + 1)} sx={{ marginTop: 2 }}>
        Load More
      </Button>
    </Container>
  );
};

export default Politics;
