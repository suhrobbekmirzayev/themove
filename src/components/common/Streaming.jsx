import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import CircularProgress from './CircularProgress';

export default function Streaming() {
  const [famous, setFamous] = useState([]);
  const [activeButton, setActiveButton] = useState('Streaming');

  useEffect(() => {
    const getData = async () => {
      let url = '';

      if (activeButton === 'Streaming') {
        url = 'https://api.themoviedb.org/3/tv/popular?api_key=fbb2ad881df28e33842f45f5313e2b21';
      } else if (activeButton === 'On TV') {
        url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=fbb2ad881df28e33842f45f5313e2b21';
      } else if (activeButton === 'For Rent') {
        url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=fbb2ad881df28e33842f45f5313e2b21';
      } else if (activeButton === 'In Theaters') {
        url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fbb2ad881df28e33842f45f5313e2b21';
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setFamous(data.results || []);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    getData();
  }, [activeButton]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // GSAP animatsiyalarini qo‘shish
  useEffect(() => {
    if (famous.length > 0) {
      famous.forEach((fam, index) => {
        gsap.fromTo(
          `.item-${fam.id}`, // Har bir element uchun unique class name
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3, // Har bir elementga kechikish qo‘shish
            ease: 'power3.out',
          }
        );
      });
    }
  }, [famous]);

  return (
    <div className="w-full mt-5 mb-5">
      <div className="flex items-center ml-[203px] pt-5 gap-10">
        <h2 className="text-2xl text-black font-bold">What's Popular</h2>
        <div className="rounded-full border-[3px] border-[#59b39b] bg-gray-100 flex gap-5 p-1">
          <button
            className={`${activeButton === 'Streaming' ? 'bg-[#042441] text-white' : 'bg-white text-black'} px-4 py-2 rounded-full`}
            onClick={() => handleClick('Streaming')}
          >
            Streaming
          </button>
          <button
            className={`${activeButton === 'On TV' ? 'bg-[#042441] text-white' : 'bg-white text-black'} px-4 py-2 rounded-full`}
            onClick={() => handleClick('On TV')}
          >
            On TV
          </button>
          <button
            className={`${activeButton === 'For Rent' ? 'bg-[#042441] text-white' : 'bg-white text-black'} px-4 py-2 rounded-full`}
            onClick={() => handleClick('For Rent')}
          >
            For Rent
          </button>
          <button
            className={`${activeButton === 'In Theaters' ? 'bg-[#042441] text-white' : 'bg-white text-black'} px-4 py-2 rounded-full`}
            onClick={() => handleClick('In Theaters')}
          >
            In Theaters
          </button>
        </div>
      </div>
      <div className="max-w-[75%] h-auto pt-5 pb-10 mx-auto overflow-x-auto">
        <div className="flex justify-start gap-4">
          {famous.length > 0 ? (
            famous.map((fam) => (
              <div
                key={fam.id}
                className={`relative flex-shrink-0 text-center group item-${fam.id}`} // Unique class for GSAP
              >
                <div className="relative max-w-[150px] max-h-[225px]">
                  <img
                    className="w-[150px] h-[225px] object-cover rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${fam.backdrop_path}`}
                    alt={fam.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-sm rounded-b-md">
                    <h3 className="font-bold text-lg">{fam.name}</h3>
                    <p className="text-xs">{fam.first_air_date}</p>
                    <CircularProgress value={Math.trunc(fam.vote_average * 10)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-black">No data available</div>
          )}
        </div>
      </div>
    </div>
  );
}
