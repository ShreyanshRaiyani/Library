import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone,  Facebook, Twitter, Instagram, Youtube } from 'lucide-react';//{MapPin, Users, BookOpen, Lightbulb, Award, Building } 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap size={32} className="text-secondary" />
              <div>
                <div className="text-xl font-bold">E-Pathsala</div>
                <div className="text-xs uppercase tracking-wider text-gray-300">Digital Learning Hub</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              Empowering learners through digital education. Access a vast collection of educational resources, research materials, and learning tools all in one place.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/books" className="text-gray-300 hover:text-secondary transition-colors">Books</Link></li>
              <li><Link to="/journals" className="text-gray-300 hover:text-secondary transition-colors">Journals</Link></li>
              <li><Link to="/newspapers" className="text-gray-300 hover:text-secondary transition-colors">Newspapers</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Study Materials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Video Lectures</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Practice Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Educational Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Learning Paths</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-2 flex-shrink-0 text-secondary" />
                <span className="text-gray-300">
                  E-Pathsala Learning Center<br />
                  123 Education Street<br />
                  New Delhi, India 110001
                </span>
              </li> */}
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-secondary" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-secondary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-secondary" />
                <a href="mailto:support@epathsala.edu" className="text-gray-300 hover:text-secondary transition-colors">
                  support@epathsala.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} E-Pathsala Digital Learning Hub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
