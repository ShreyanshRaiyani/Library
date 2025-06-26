import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center space-x-1 text-sm">
        <li>
          <Link to="/" className="flex items-center text-gray-500 hover:text-primary">
            <Home size={16} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="text-gray-400 mx-1" />
            {index === items.length - 1 || !item.path ? (
              <span className="text-primary font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="text-gray-500 hover:text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;