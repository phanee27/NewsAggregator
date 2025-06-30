import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";

const Home = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); 
  const apiKey = "75fb17c0265e4e6aa3b95623302f46a6"; 

  useEffect(() => {
    const categories = ["sports", "entertainment", "technology", "general"];

    Promise.all(
      categories.map(category =>
        axios.get(`http://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=5&apiKey=${apiKey}`)
      )
    )
      .then(responses => {
        const allNews = responses.flatMap(response => response.data.articles);
        
        
        const uniqueNews = Array.from(new Map(allNews.map(article => [article.title, article])).values());

        setNews(uniqueNews);
      })
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  
  const filteredNews = news.filter(article =>
    [article.title, article.description, article.content]
      .join(" ") 
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Top Trending News
      </Typography>

      {/* Search Box */}
      <TextField
        fullWidth
        label="Search News by Keywords..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={2}>
        {filteredNews.slice(0, visibleCount).map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {visibleCount < filteredNews.length && (
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3, display: "block", marginX: "auto" }}
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          Load More
        </Button>
      )}
    </Container>
  );
};

export default Home;
