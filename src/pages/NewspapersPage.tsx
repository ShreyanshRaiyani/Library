import React, { useState } from 'react';
import { Newspaper, Filter, ChevronDown } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';
import Pagination from '../components/Pagination';
import { newspapers } from '../data/resources';

const NewspapersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(newspapers.length / itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const currentNewspapers = newspapers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Newspapers', path: '/newspapers' },
          ]}
        />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mr-3">
              <Newspaper size={20} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Newspapers</h1>
          </div>
          
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors w-full md:w-auto"
              onClick={toggleFilter}
            >
              <Filter size={18} />
              <span>Filter</span>
              <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar placeholder="Search for newspapers..." className="mb-4" />
          
          {isFilterOpen && (
            <div className="bg-white p-4 rounded-lg shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                    Region
                  </label>
                  <select
                    id="region"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All Regions</option>
                    <option value="north-india">North India</option>
                    <option value="south-india">South India</option>
                    <option value="east-india">East India</option>
                    <option value="west-india">West India</option>
                    <option value="central-india">Central India</option>
                    <option value="international">International</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    id="language"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All Languages</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="bengali">Bengali</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                    <option value="marathi">Marathi</option>
                    <option value="gujarati">Gujarati</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
                    Time Period
                  </label>
                  <select
                    id="period"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">Any Period</option>
                    <option value="2000-present">2000 - Present</option>
                    <option value="1975-1999">1975 - 1999</option>
                    <option value="1950-1974">1950 - 1974</option>
                    <option value="1925-1949">1925 - 1949</option>
                    <option value="1900-1924">1900 - 1924</option>
                    <option value="before-1900">Before 1900</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="publisher" className="block text-sm font-medium text-gray-700 mb-1">
                    Publisher
                  </label>
                  <input
                    type="text"
                    id="publisher"
                    placeholder="Publisher name..."
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="archive-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Archive Type
                  </label>
                  <select
                    id="archive-type"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All Types</option>
                    <option value="full-text">Full Text</option>
                    <option value="scanned">Scanned Images</option>
                    <option value="partial">Partial Archives</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, newspapers.length)} of {newspapers.length} newspapers</p>
          
          <select className="rounded-md border border-gray-300 py-1.5 px-3 text-sm">
            <option value="relevance">Sort by: Relevance</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="a-z">Title A-Z</option>
            <option value="z-a">Title Z-A</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentNewspapers.map((newspaper) => (
            <ResourceCard key={newspaper.id} {...newspaper} />
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

export default NewspapersPage;