import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
    <CardMedia
        component="img"
        height="200"
        image={article.urlToImage || "http://placehold.co/300x200?text=No+Image+Available"}
        alt={article.title}
    />

      <CardContent>
        <Typography variant="h6" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description || "No description available."}
        </Typography>
        <Button size="small" href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
