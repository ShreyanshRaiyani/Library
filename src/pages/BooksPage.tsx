import React, { useState } from 'react';
import { Book } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';
import Pagination from '../components/Pagination';
import { books, Resource } from '../data/resources';

const BooksPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState<Resource[]>(books);
  const itemsPerPage = 8;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const handleFilterApply = (filters: { resourceType: string; language: string; year: string }) => {
    let filtered = [...books];

    if (filters.language) {
      filtered = filtered.filter(book => book.language?.toLowerCase() === filters.language.toLowerCase());
    }

    if (filters.year) {
      if (filters.year === 'older') {
        filtered = filtered.filter(book => book.publishedYear < 2020);
      } else {
        filtered = filtered.filter(book => book.publishedYear.toString() === filters.year);
      }
    }

    setFilteredBooks(filtered);
    setCurrentPage(1);
  };
  
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Books', path: '/books' },
          ]}
        />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mr-3">
              <Book size={20} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Books</h1>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar 
            placeholder="Search for books..." 
            className="mb-4"
            onFilterApply={handleFilterApply}
          />
        </div>
        
        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredBooks.length)} of {filteredBooks.length} books
          </p>
          
          <select className="rounded-md border border-gray-300 py-1.5 px-3 text-sm text-gray-900">
            <option value="relevance">Sort by: Relevance</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="a-z">Title A-Z</option>
            <option value="z-a">Title Z-A</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentBooks.map((book) => (
            <ResourceCard key={book.id} {...book} />
          ))}
        </div>
        
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BooksPage;