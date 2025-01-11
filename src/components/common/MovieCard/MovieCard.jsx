import React from "react";

const MovieCard = ({ image, title, date, score }) => {
  return (
    <div className="relative w-[192px] overflow-hiddentext-begin my-4">
      <div className="w-[192px] h-[284px]">
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={title}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <div className=" absolute bottom-[63px] left-5">
        <div className="relative w-16 h-16 mx-auto mt-4">
          <svg
            className="w-16 h-16 bg-black rounded-[50%]"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-gray-800"
              d="M18 2.0845
                 a 15.9155 15.9155 0 1 1 0 31.831
                 a 15.9155 15.9155 0 1 1 0 -31.831"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
            />
            <path
              className="text-yellow-400"
              d="M18 2.0845
                 a 15.9155 15.9155 0 1 1 0 31.831
                 a 15.9155 15.9155 0 1 1 0 -31.831"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${score}, 100`}
              stroke="currentColor"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
            {score}%
          </span>
        </div>
      </div>

      <div className="p-4 mt-[10px]">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
