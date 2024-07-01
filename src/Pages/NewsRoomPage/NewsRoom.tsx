import React, { useEffect, useState } from 'react';
import newsData from '../../data/news.json';
import authorsData from '../../data/authors.json';
import { NewsItem, Author } from '../../types/types';
import Card from '../../components/Cards/Cards';

const NewsRoomPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    setNews(newsData as NewsItem[]);
    setAuthors(authorsData as Author[]);
  }, []);

  const getAuthorById = (id: number): Author | undefined => {
    return authors.find((author) => author.id === id);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day}\n${month}`;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="flex flex-col gap-5">
          {news.map((item) => {
            const author = getAuthorById(item.author_id);
            return <Card key={item.id} newsItem={item} author={author} formatDate={formatDate} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsRoomPage;
