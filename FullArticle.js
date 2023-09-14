import React from 'react';

const FullArticle = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read the full article
      </a>
    </div>
  );
};

export default FullArticle;
