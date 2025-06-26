import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Lightbulb, GraduationCap, Award, Building } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'About', path: '/about' },
          ]}
        />
        
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
          <div className="bg-primary text-white p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About The E-Pathsala Digital Library</h1>
              <p className="text-xl text-gray-100 mb-6">
                Empowering education through accessible digital knowledge resources
              </p>
              <p className="text-gray-200">
                The E-Pathsala Digital Library (EPS) is a virtual repository of learning resources with a single-window search facility. 
                It is designed to hold content of any language and provides interface support for leading Indian languages.
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-6">
                The E-Pathsala Digital aims to collect, preserve and make accessible the intellectual output of the country and provide free access to many resources that would otherwise be restricted to library members or paying customers only. 
                NDLI is a project under the Ministry of Education, Government of India, aiming to develop a framework of virtual repository of learning resources with a single-window search facility.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="mb-6">
                To develop a national digital library of India as a single-window platform that collects and collates metadata from premier learning institutions in India and abroad, as well as other relevant sources. It is being developed to help students to prepare for entrance and competitive examinations, to enable people to learn and prepare from best practices from all over the world and to facilitate researchers to perform inter-linked exploration from multiple sources.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                    <Users size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">For Everyone</h3>
                  <p className="text-gray-600">
                    EPS caters to all learners, from primary to postgraduate levels, including researchers and lifelong learners of all disciplines.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">All Content Types</h3>
                  <p className="text-gray-600">
                    The library includes books, research papers, journals, newspapers, theses, audio lectures, videos, and web courses.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-light/10 text-primary rounded-full mb-4">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Innovative Technology</h3>
                  <p className="text-gray-600">
                    Using state-of-the-art technology for search, discovery, and personalization to enhance the learning experience.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Our History</h2>
              <p className="mb-6">
                The E-Pathsala Digital Library was initiated for Education, Mission on Education through Information and Communication Technology (NMEICT). 
              </p>
              <p className="mb-6">
                Since its inception, E-Pathsala has grown to become one of the largest digital libraries in the world, with millions of resources spanning various disciplines, languages, and educational levels. The project continues to expand its collection through partnerships with premier educational institutions, research organizations, and content providers both within India and internationally.
              </p>
              
              <div className="border-l-4 border-primary pl-6 my-8 py-2">
                <blockquote className="text-xl italic text-gray-700">
                  "The E-Pathsala Digital Library  is a digital knowledge asset that enables every citizen with the power of knowledge. It brings libraries, learners, and knowledge together on a single platform."
                </blockquote>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Educational Focus</h3>
                    <p className="text-gray-600">
                      Resources curated specifically for education at all levels, from primary to postgraduate.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Quality Resources</h3>
                    <p className="text-gray-600">
                      Content sourced from reputable institutions and publishers with a focus on academic excellence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Building size={20} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Institutional Network</h3>
                    <p className="text-gray-600">
                      Collaboration with institutions to provide a diverse range of educational materials.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Taking Resource </h2>
              <p className="mb-6">
                E-Pathsala leading educational institutions, libraries, publishers, and content providers to offer a comprehensive collection of resources. 
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Indian Institutes of Technology (IITs)</li>
                <li>Indian Institutes of Management (IIMs)</li>
                <li>National Institutes of Technology (NITs)</li>
                <li>Indian Council of Agricultural Research (ICAR)</li>
                <li>National Council of Educational Research and Training (NCERT)</li>
                <li>University Grants Commission (UGC)</li>
                <li>International publishers and content providers</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-8">
                For more information about the Digital Library , please visit our 
                <Link to="/contact" className="text-primary hover:underline mx-1">Contact Page</Link>
                or reach out to us directly at 
                <a href="mailto:support@epathsala.edu" className="text-primary hover:underline mx-1">support@epathsala.edu</a>.
              </p>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <Link to="/" className="btn btn-primary">
                Explore the Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
