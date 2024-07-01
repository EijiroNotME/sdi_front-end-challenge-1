import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../../data/news.json'; 
import authorsData from '../../data/authors.json'; 
import { NewsItem, Author } from '../../types/types'; 

const NewsDisplayPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 


  if (!id) {
    return <div>Article ID is missing</div>;
  }


  const article: NewsItem | undefined = newsData.find((item) => item.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>; 
  }

  const author: Author | undefined = authorsData.find((author) => author.id === article.author_id);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-[90%] max-h-[90%] bg-white rounded-lg shadow-md p-4">
        <img src={article.image_url} alt={article.title} className="w-full h-full max-h-[50%] object-cover rounded-t-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="mr-2 font-bold text-secondary text-lg">{author?.name}</span>
          <span>&bull;</span>
          <span className="ml-2 bg-accent p-2 px-4 rounded-full font-bold text-primary">{article.created_at}</span>
        </div>
        <p className="text-gray-700 mb-4">{article.body}</p>
        <Link to="/" className="text-blue-500 inline-block mt-4">&larr; Back to Home</Link>
      </div>
    </div>
  );
};

export default NewsDisplayPage;
