'use client'

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MovieCarousel() {
  const [media, setMedia] = useState([]);
  const [activeButton, setActiveButton] = useState('Popular');
  const [backgroundImage, setBackgroundImage] = useState('');
  const cardRefs = useRef([]);

  const apiUrls = {
    Popular: 'https://api.themoviedb.org/3/movie/popular?api_key=fbb2ad881df28e33842f45f5313e2b21',
    Streaming: 'https://api.themoviedb.org/3/tv/popular?api_key=fbb2ad881df28e33842f45f5313e2b21',
    'On TV': 'https://api.themoviedb.org/3/tv/on_the_air?api_key=fbb2ad881df28e33842f45f5313e2b21',
    'For Rent': 'https://api.themoviedb.org/3/movie/now_playing?api_key=fbb2ad881df28e33842f45f5313e2b21',
    'In Theaters': 'https://api.themoviedb.org/3/movie/upcoming?api_key=fbb2ad881df28e33842f45f5313e2b21'
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(apiUrls[activeButton]);
        const data = await response.json();
        setMedia(data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMedia([]);
      }
    };

    fetchMedia();
  }, [activeButton]);

  useEffect(() => {
    // GSAP animation for movie cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );
  }, [media]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleMouseEnter = (imagePath) => {
    setBackgroundImage(`https://image.tmdb.org/t/p/w500${imagePath}`);
  };

  const handleMouseLeave = () => {
    setBackgroundImage('');
  };

  return (
    <div
      className="bg-[#113045] w-full mt-5 mb-5"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="flex items-center ml-[203px] pt-5 gap-10">
        <h2 className="text-2xl text-white font-bold">Latest Trailers</h2>
        <div className="rounded-full border-[3px] border-[#59b39b] bg-gray-100 flex gap-5 p-1">
          {Object.keys(apiUrls).map((buttonName) => (
            <button
              key={buttonName}
              className={`${activeButton === buttonName ? 'bg-[#042441] text-[#a4d9c3]' : 'bg-white text-gray-900'} active:bg-[#86f1bf] px-4 py-2 rounded-full`}
              onClick={() => handleClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-[73%] mx-auto overflow-x-auto mt-4 mb-4">
        <div className="flex gap-6 w-max">
          {media.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)} // Assign refs to each card
              className="flex-shrink-0 text-center relative group"
              onMouseEnter={() => handleMouseEnter(item.backdrop_path)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-[300px] h-[168px] rounded-md overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.title || item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-white mt-2">{item.title || item.name}</h3>
              <span className="text-gray-400">{item.release_date || item.first_air_date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
