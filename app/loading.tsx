import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-200 border-t-transparent rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg font-medium text-zinc-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;