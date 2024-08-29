import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav className="flex px-5 py-3 text-[#2f2334] border-b-2 border-[#2f2334] bg-transparent" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Always start with the root '/' breadcrumb */}
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-md font-semibold text-gray-400">
            /
          </Link>
        </li>

        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;

          // Replace hyphens with spaces and capitalize the first letter
          const displayPath = path.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

          return (
            <li key={index} className="flex items-center">
              <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              {isLast ? (
                <span className="ms-1 text-md font-semibold text-gray-700 md:ms-2 dark:text-gray-400">
                  {displayPath}
                </span>
              ) : (
                <Link to={routeTo} className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                  {displayPath}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
