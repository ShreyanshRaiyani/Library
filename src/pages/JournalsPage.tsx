import React, { useState } from 'react';
import { BookText, Filter, ChevronDown } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';
import Pagination from '../components/Pagination';
import { journals } from '../data/resources';

const JournalsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(journals.length / itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const currentJournals = journals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Journals', path: '/journals' },
          ]}
        />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mr-3">
              <BookText size={20} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Journals</h1>
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
          <SearchBar placeholder="Search for journals..." className="mb-4" />
          
          {isFilterOpen && (
            <div className="bg-white p-4 rounded-lg shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject Area
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All Subject Areas</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                    <option value="medicine">Medicine</option>
                    <option value="humanities">Humanities</option>
                    <option value="social-sciences">Social Sciences</option>
                    <option value="business">Business</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="publisher" className="block text-sm font-medium text-gray-700 mb-1">
                    Publisher
                  </label>
                  <select
                    id="publisher"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All Publishers</option>
                    <option value="elsevier">Elsevier</option>
                    <option value="springer">Springer Nature</option>
                    <option value="ieee">IEEE</option>
                    <option value="wiley">Wiley</option>
                    <option value="oxford">Oxford University Press</option>
                    <option value="taylor-francis">Taylor & Francis</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Publication Year
                  </label>
                  <select
                    id="year"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">Any Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="older">Before 2019</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="access-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Access Type
                  </label>
                  <select
                    id="access-type"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                  >
                    <option value="">All</option>
                    <option value="open-access">Open Access</option>
                    <option value="subscription">Subscription Required</option>
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
                    <option value="other">Other</option>
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
          <p className="text-gray-600">Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, journals.length)} of {journals.length} journals</p>
          
          <select className="rounded-md border border-gray-300 py-1.5 px-3 text-sm">
            <option value="relevance">Sort by: Relevance</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="a-z">Title A-Z</option>
            <option value="z-a">Title Z-A</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentJournals.map((journal) => (
            <ResourceCard key={journal.id} {...journal} />
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

export default JournalsPage;