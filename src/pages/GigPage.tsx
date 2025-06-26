import React, { useState } from 'react';
import { Database, Filter, ChevronDown, Download, Share } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SearchBar from '../components/SearchBar';
import { gigResources } from '../data/resources';

const GigPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'GIG', path: '/gig' },
          ]}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mr-3">
              <Database size={20} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Global Information Gateway</h1>
          </div>
          
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors w-full md:w-auto"
            >
              <Filter size={18} />
              <span>Filter</span>
              <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <SearchBar placeholder="Search GIG resources..." className="mb-4" />
          
          {isFilterOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option value="">All Institutions</option>
                    <option value="nasa">NASA</option>
                    <option value="nih">NIH</option>
                    <option value="cern">CERN</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Access Level
                  </label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option value="">All Access Levels</option>
                    <option value="open">Open Access</option>
                    <option value="restricted">Restricted</option>
                    <option value="institutional">Institutional</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Format
                  </label>
                  <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                    <option value="">All Formats</option>
                    <option value="csv">CSV</option>
                    <option value="json">JSON</option>
                    <option value="xml">XML</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                  Reset
                </button>
                <button className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-dark">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6">
          {gigResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.categories?.map((category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-light/10 text-primary rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Institution</p>
                      <p className="font-medium">{resource.gigDetails?.institution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Access Level</p>
                      <p className="font-medium capitalize">{resource.gigDetails?.accessLevel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Citations</p>
                      <p className="font-medium">{resource.gigDetails?.citations}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium">{resource.gigDetails?.lastUpdated}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {resource.gigDetails?.format.map((format: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                      <button
                        key={index}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                      >
                        <Download size={14} className="mr-1" />
                        {format}
                      </button>
                    ))}
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                      <Share size={14} className="mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GigPage;