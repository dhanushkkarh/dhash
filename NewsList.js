import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container } from '@mui/material';
import NewsCard from './NewsCard';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
  
    // const query =['ayush','Ayurveda','Yoga','Naturopathy','Unani','Siddha','Homeopathy','ayush startup','medicine','ayush india']
    const apiUrl = `https://gnews.io/api/v4/search?q=Siddha&lang=en&country=in&max=10&apikey=6b667c37a33a2810d8d8eaf1d9a70886`
    // const apiUrl = `https://gnews.io/api/v4/top-headlines?category=health&apikey=6b667c37a33a2810d8d8eaf1d9a70886`
    axios.get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: 'center', backgroundColor : '#0077B5' , color:'white' , borderRadius:'4px' , fontFamily:'timesnewroman'}}>Latest News</h1>
      <Grid container spacing={2}>
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsList;
