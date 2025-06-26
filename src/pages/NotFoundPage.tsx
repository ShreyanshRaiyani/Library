import React from 'react';
import { Link } from 'react-router-dom';
import { BookX, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 animate-fade-in">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 flex items-center justify-center bg-primary-light/10 text-primary rounded-full">
            <BookX size={48} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center justify-center"
          >
            <Home size={16} className="mr-2" />
            Back to Home
          </Link>
          
          <Link
            to="/books"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Search size={16} className="mr-2" />
            Browse Library
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;