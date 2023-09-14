import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import FullArticle from './FullArticle'; // Import the FullArticle component

const NewsCard = ({ article }) => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const handleShowFullArticle = () => {
    setShowFullArticle(true);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={article.image}
        alt={article.title}
      />
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        {showFullArticle ? (
          <FullArticle article={article} /> // Render the FullArticle component
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleShowFullArticle}
          >
            Read More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
