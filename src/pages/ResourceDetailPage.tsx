import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Download, BookOpen, Calendar, Globe, 
  Building, ThumbsUp, ThumbsDown, Share, BookmarkPlus, Eye
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ResourceCard from '../components/ResourceCard';
import { getResourceById, getRelatedResources, Resource } from '../data/resources';

const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    if (id) {
      // Simulate API call
      setIsLoading(true);
      setTimeout(() => {
        const foundResource = getResourceById(id);
        setResource(foundResource || null);
        
        if (foundResource) {
          setRelatedResources(getRelatedResources(foundResource));
        }
        
        setIsLoading(false);
      }, 500);
    }
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="container-custom py-12 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading resource details...</p>
        </div>
      </div>
    );
  }
  
  if (!resource) {
    return (
      <div className="container-custom py-12 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Resource Not Found</h2>
          <p className="text-gray-600 mb-6">The resource you are looking for does not exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
        </div>
      </div>
    );
  }
  
  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { 
              label: formatType(resource.type) + 's', 
              path: `/${resource.type}s` 
            },
            { label: resource.title }
          ]}
        />
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
          <div className="bg-primary-light/5 p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-md">
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-4 space-y-2">
                  <button className="w-full btn btn-primary flex items-center justify-center">
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                  
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Eye size={16} className="mr-2" />
                    Read Online
                  </button>
                  
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <BookmarkPlus size={16} className="mr-2" />
                    Save to Collection
                  </button>
                </div>
              </div>
              
              <div className="md:w-3/4 lg:w-4/5 md:pl-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{resource.title}</h1>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center mr-4">
                    <BookOpen size={16} className="mr-1" />
                    {formatType(resource.type)}
                  </span>
                  {resource.language && (
                    <span className="flex items-center mr-4">
                      <Globe size={16} className="mr-1" />
                      {resource.language}
                    </span>
                  )}
                  <span className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    {resource.publishedYear}
                  </span>
                  {resource.publisher && (
                    <span className="flex items-center">
                      <Building size={16} className="mr-1" />
                      {resource.publisher}
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-2">Author</h2>
                  <p className="text-gray-800">{resource.author}</p>
                </div>
                
                {resource.categories && (
                  <div className="mb-6">
                    <h2 className="text-lg font-medium mb-2">Categories</h2>
                    <div className="flex flex-wrap gap-2">
                      {resource.categories.map((category, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-light/10 text-primary rounded-full text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {resource.pages && (
                  <div className="mb-6">
                    <h2 className="text-lg font-medium mb-2">Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 text-sm">Pages</p>
                        <p className="text-gray-800">{resource.pages}</p>
                      </div>
                      {resource.isbn && (
                        <div>
                          <p className="text-gray-600 text-sm">ISBN</p>
                          <p className="text-gray-800">{resource.isbn}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-6">
                  <button className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <ThumbsUp size={18} className="mr-1" />
                    <span>Helpful</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <ThumbsDown size={18} className="mr-1" />
                    <span>Not Helpful</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <Share size={18} className="mr-1" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                <button
                  className={`pb-4 px-1 ${
                    activeTab === 'description'
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`pb-4 px-1 ${
                    activeTab === 'details'
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button
                  className={`pb-4 px-1 ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            {activeTab === 'description' && (
              <div>
                <h2 className="text-xl font-medium mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {resource.description || 'No description available for this resource.'}
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div>
                <h2 className="text-xl font-medium mb-4">Detailed Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Publication Details</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Title:</span>
                        <span className="w-2/3 text-gray-800">{resource.title}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Author:</span>
                        <span className="w-2/3 text-gray-800">{resource.author}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Publisher:</span>
                        <span className="w-2/3 text-gray-800">{resource.publisher || 'N/A'}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Year:</span>
                        <span className="w-2/3 text-gray-800">{resource.publishedYear}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Language:</span>
                        <span className="w-2/3 text-gray-800">{resource.language || 'N/A'}</span>
                      </div>
                      {resource.pages && (
                        <div className="flex">
                          <span className="w-1/3 text-gray-600">Pages:</span>
                          <span className="w-2/3 text-gray-800">{resource.pages}</span>
                        </div>
                      )}
                      {resource.isbn && (
                        <div className="flex">
                          <span className="w-1/3 text-gray-600">ISBN:</span>
                          <span className="w-2/3 text-gray-800">{resource.isbn}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Resource Information</h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Type:</span>
                        <span className="w-2/3 text-gray-800">{formatType(resource.type)}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Format:</span>
                        <span className="w-2/3 text-gray-800">PDF, EPUB</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Access:</span>
                        <span className="w-2/3 text-gray-800">Open Access</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">File Size:</span>
                        <span className="w-2/3 text-gray-800">8.4 MB</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Downloads:</span>
                        <span className="w-2/3 text-gray-800">2,548</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-600">Added:</span>
                        <span className="w-2/3 text-gray-800">January 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-medium mb-4">User Reviews</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-600 text-center">No reviews available for this resource yet.</p>
                </div>
                
                <button className="btn btn-primary">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedResources.map((relatedResource) => (
                < ResourceCard key={relatedResource.id} {...relatedResource} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceDetailPage;