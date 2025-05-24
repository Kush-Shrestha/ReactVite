import React from 'react';

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer; 