import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookText, Newspaper, Book, ChevronRight } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ResourceCard from '../components/ResourceCard';
import { getFeaturedResources } from '../data/resources';


const HomePage: React.FC = () => {
  const featuredResources = getFeaturedResources();
   
  return (
    <div className="animate-fade-in">

      <section className="relative bg-primary py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-Pathsala Digital Library
            </h1>
            <p className="text-l md:text-2xl text-gray-200 mb-8">
              Access 100 of books, journals, and research papers in one place
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                placeholder="Search for books, journals, articles..." 
                className="mb-6"/>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="text-gray-300">Popular searches:</span>
                <a href="#" className="text-secondary hover:underline">Computer Science</a>
                <a href="#" className="text-secondary hover:underline">Modern Literature</a>
                <a href="#" className="text-secondary hover:underline">Quantum Physics</a>
                <a href="#" className="text-secondary hover:underline">World History</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/books" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          
              <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Books</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Explore our vast collection of books across various genres
              </p>
              <span className="text-primary flex items-center text-sm font-medium">
                Books <ChevronRight size={16} className="ml-1" />
              </span>
            </Link>
            
            <Link 
              to="/journals" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            
              <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                <BookText size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Journals</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Access academic journals from renowned publishers
              </p>
              <span className="text-primary flex items-center text-sm font-medium">
                 Journals <ChevronRight size={16} className="ml-1" />
              </span>
            </Link>
            
            <Link 
              to="/newspapers" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            
              <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                <Newspaper size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Newspapers</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Read archived newspapers from different time periods
              </p>
              <span className="text-primary flex items-center text-sm font-medium">
                Newspapers <ChevronRight size={16} className="ml-1" />
              </span>
            </Link>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                <Book size={32} />
              </div>
              <h3 className="text-lg font-medium mb-2">Research Papers</h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Discover cutting-edge research papers and articles
              </p>
              <span className="text-primary flex items-center text-sm font-medium">
                Papers <ChevronRight size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Resources Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Resources</h2>
            <Link to="/books" className="text-primary flex items-center hover:underline">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.slice(0, 4).map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recently Added Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recently Added</h2>
            <Link to="/books" className="text-primary flex items-center hover:underline">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.slice(4, 8).map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About E-Pathsala Digital Library</h2>
              <p className="text-gray-200 mb-6">
                The E-Pathsala Digital Library(EPS) is a virtual repository of learning resources with a single-window search facility. It is designed to hold content of any language and provides interface support for leading Indian languages.
              </p>
              <p className="text-gray-200 mb-6">
                E-Pathsala is designed to provide support for all academic levels including researchers and life-long learners, all disciplines, all popular forms of access devices and differently-abled learners.
              </p>
              <Link to="/about" className="btn btn-secondary inline-flex items-center">
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-secondary rounded-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Library interior" 
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"/>
                
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      {/* <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <p className="text-gray-600">Digital Resources</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">70+</div>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">Partner Institutions</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5M+</div>
              <p className="text-gray-600">Registered Users</p>
            </div>
          </div>
        </div>
      </section> */}
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive updates on new resources and features
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required/>
            <button
              type="submit"
              className="btn btn-primary whitespace-nowrap">
            
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;