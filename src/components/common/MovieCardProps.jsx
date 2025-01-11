import { useState } from 'react';

export default function MovieCard({ title, releaseDate, rating, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const getRatingColor = (rating) => {
    if (rating >= 70) return 'border-green-500';
    if (rating >= 40) return 'border-yellow-500';
    return 'border-red-500';
  };

  return (
    <div 
      className="w-[150px] rounded-lg overflow-hidden shadow-md bg-white mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-[150px] h-[273px] object-cover"
        />

        <div className={`absolute bottom-2 left-2 w-10 h-10 rounded-full bg-black border-2 ${getRatingColor(rating)} flex items-center justify-center`}>
          <span className="text-white text-sm font-bold">
            {rating}<span className="text-xs">%</span>
          </span>
        </div>

        <button 
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" 
            />
          </svg>
        </button>
      </div>

      <div className="p-3">
        <h3 className="font-bold text-sm truncate">{title}</h3>
        <p className="text-sm text-gray-500">{releaseDate}</p>
      </div>
    </div>
  );
}
