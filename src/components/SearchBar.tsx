import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { allResources } from '../data/resources';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onFilterApply?: (filters: FilterState) => void;
}

interface FilterState {
  resourceType: string;
  language: string;
  year: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search for books, journals, newspapers...", 
  className = "",
  onFilterApply
}) => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof allResources>([]);
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    resourceType: '',
    language: '',
    year: ''
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setShowResults(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = allResources.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.categories?.some(category => 
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleResultClick = (id: string) => {
    navigate(`/resource/${id}`);
    clearSearch();
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterApply = () => {
    if (onFilterApply) {
      onFilterApply(filters);
    }
    setIsFilterOpen(false);
  };

  const handleFilterReset = () => {
    setFilters({
      resourceType: '',
      language: '',
      year: ''
    });
    if (onFilterApply) {
      onFilterApply({
        resourceType: '',
        language: '',
        year: ''
      });
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <form onSubmit={handleSearch} className="relative w-full">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value.length >= 2) {
                handleSearch(e);
              } else {
                setShowResults(false);
              }
            }}
            className="w-full pl-10 pr-20 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm text-gray-900 placeholder-gray-500"
          />
          <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
          
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-14 top-3.5 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          
          <button
            type="button"
            onClick={toggleFilter}
            className={`absolute right-3 top-3 text-gray-600 hover:text-primary transition-colors ${
              isFilterOpen ? 'text-primary' : ''
            }`}
            aria-label="Toggle filters"
          >
            <Filter size={18} />
          </button>
        </div>

        {showResults && searchResults.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
            {searchResults.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result.id)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start border-b border-gray-100 last:border-0"
              >
                <img
                  src={result.imageUrl}
                  alt={result.title}
                  className="w-12 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{result.title}</h4>
                  <p className="text-sm text-gray-600">by {result.author}</p>
                  <p className="text-xs text-gray-500">
                    {result.type.charAt(0).toUpperCase() + result.type.slice(1)} • {result.publishedYear}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {showResults && searchResults.length === 0 && searchTerm && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center text-gray-600">
            No results found for "{searchTerm}"
          </div>
        )}

        {isFilterOpen && (
          <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Type
                </label>
                <select
                  id="resourceType"
                  name="resourceType"
                  value={filters.resourceType}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-900"
                >
                  <option value="">All Types</option>
                  <option value="book">Books</option>
                  <option value="journal">Journals</option>
                  <option value="newspaper">Newspapers</option>
                  <option value="thesis">Thesis</option>
                  <option value="article">Articles</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={filters.language}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-900"
                >
                  <option value="">All Languages</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Publication Year
                </label>
                <select
                  id="year"
                  name="year"
                  value={filters.year}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm text-gray-900"
                >
                  <option value="">Any Year</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="older">Before 2020</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 space-x-3">
              <button
                type="button"
                className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700"
                onClick={handleFilterReset}
              >
                Reset
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                onClick={handleFilterApply}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;