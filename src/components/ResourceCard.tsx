import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, BookmarkPlus } from 'lucide-react';


export interface ResourceProps {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  type: "book" | "journal" | "newspaper" | "article" | "gig";
  publishedYear: number;
  publisher?: string;
  language?: string;
  categories?: string[];
  pages?: number;
  isbn?: string;
  description?: string;
}

const ResourceCard: React.FC<ResourceProps> = ({
  id,
  title,
  author,
  imageUrl,
  type,
  publishedYear,
  publisher,
  language,
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'book':
        return <BookOpen size={16} />;
      case 'journal':
      case 'newspaper':
      case 'article':
      default:
        return <BookOpen size={16} />;
    }
  };
  
  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="resource-card group">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="resource-image transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            to={`/resource/${id}`}
            className="btn-primary mx-2 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            aria-label="Save to favorites"
            className="p-1.5 bg-white rounded-full shadow-md text-gray-600 hover:text-primary transition-colors"
          >
            <BookmarkPlus size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center text-xs resource-meta mb-2">
          <span className="flex items-center">
            {renderIcon()}
            <span className="ml-1">{formatType(type)}</span>
          </span>
          {language && (
            <>
              <span className="mx-2">•</span>
              <span>{language}</span>
            </>
          )}
          <span className="mx-2">•</span>
          <span>{publishedYear}</span>
        </div>
        
        <Link to={`/resource/${id}`} className="block">
          <h3 className="font-medium text-lg mb-1 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-1">By {author}</p>
        {publisher && <p className="text-gray-500 text-xs mb-2">{publisher}</p>}
        
        <div className="mt-auto pt-3 flex justify-between items-center">
          <Link
            to={`/resource/${id}`}
            className="text-primary text-sm font-medium hover:underline"
          >
            Read more
          </Link>
          <button
            aria-label="Download"
            className="p-1.5 text-gray-500 hover:text-primary transition-colors"
          >
            <Download size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;