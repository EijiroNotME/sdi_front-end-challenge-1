import React from 'react';
import { NewsItem, Author } from '../../types/types';
import { Link } from 'react-router-dom';
import { RiShareForwardLine } from "react-icons/ri";

// Define formatDate function here
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day}\n${month}`;
};

interface CardProps {
  newsItem: NewsItem;
  author: Author | undefined;
  formatDate: any;
}

const Card: React.FC<CardProps> = ({ newsItem, author }) => {
  const formattedDate = formatDate(newsItem.created_at).split('\n');

  return (
    <div key={newsItem.id} className="relative border rounded-lg shadow-md p-4 w-full sm:w-[600px] md:w-[800px] mx-auto">
      <div className="relative">
        <img src={newsItem.image_url} alt={newsItem.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="absolute bottom-[-20px] left-4 text-white bg-accent px-2 py-1 text-center transform -skew-x-12 flex flex-col items-center justify-center w-20">
          <div className="text-2xl font-bold">{formattedDate[0]}</div>
          <div className="text-base">{formattedDate[1]}</div>
        </div>
      </div>
      <div className='w-full px-4 flex justify-end'>
            <button className="flex items-center text-secondary hover:text-accent transition-all mt-10">
              <RiShareForwardLine className="mr-1" />
              <p className='font-bold'>Share</p>
          </button>
        </div>

      <div className="p-4">
        
     
      <div className="bg-gray-200/30 h-0.5 w-full"></div>
        <div className="flex items-center justify-between mb-2 mt-2">
          <div className="flex items-center">
            <div>
              <h3 className="text-lg font-semibold text-accent">{author?.name}</h3>
            </div>
          </div>
         
        </div>
        <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
        <p className="text-paragraph mb-4">{newsItem.body}</p>
        <Link to={`/article/${newsItem.id}`} className="text-black font-bold underline hover:scale-105 transition-all underline-offset-4">
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default Card;
